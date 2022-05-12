const path = require('path');
const glob = require('glob');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name]${ext}` : `[name].[contenthash]${ext}`;
// For production and start watching mode
let target = "web";
// Get js path
function getEntry() {
  const entry = {};
  glob.sync('./src/pages/**/script.js').forEach((file) => {
    const name = file.match(/\/pages\/(.+)\/script.js/)[1] === 'main' ? 'index' : `${file.match(/\/pages\/(.+)\/script.js/)[1]}`;
    entry[name] = file;
  });
  return entry;
}
// Get html path
function getHtmlTemplate() {
  return glob
    .sync('./src/pages/**/index.html')
    .map((file) => {
      let name = ''
      if (file.match(/\/pages\/(.+)\/index.html/)[1] === 'main') {
        name = 'index'
      }
      return { name: name || file.match(/\/pages\/(.+)\/index.html/)[1], path: file };
    })
    .map(
      (template) =>
        new HtmlWebpackPlugin({
          template: template.path,
          chunks: [template.name.toString()],
          filename: `${template.name}.html`,
        })
    );
}
// For eslint
const options = {
  extensions: [`js`, `jsx`, `ts`],
  exclude: [
    `/node_modules/`,
    `/bower_components/`
  ],
  failOnWarning: true,
}

// Plugins
const plugins = [
  ...getHtmlTemplate(),
  new MiniCssExtractPlugin({
    filename: `${filename('.css')}`
  }),
  new ESLintPlugin(options),
];

if (isProd) {
  plugins.push(
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false
                }
              ]
            }
          ]
        ]
      }
    })
  )
}

if (process.env.NODE_ENV === "production") {
  target = "browserslist";
}

module.exports = {
  mode: 'development',
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: `${filename('.js')}`,
    publicPath: '',
    // this places all images processed in an image folder
    assetModuleFilename: "[hash].[ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: `./assets/icons/${filename('[ext]')}`
        },
        use: 'svgo-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: `./assets/images/${filename('[ext]')}`
        }
      },
      {
        test: /\.mp4$/i,
        type: 'asset/resource',
        generator: {
          filename: `./assets/video/${filename('[ext]')}`
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: `./assets/fonts/${filename('[ext]')}`
        }
      },
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {

            cacheDirectory: true,
          },
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  target: target,
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".ts"],
  },
  plugins: plugins,
  // required if using webpack-dev-server
  devServer: {
    open: true,
    host: 'localhost',
    static: {
      directory: path.relative(__dirname, 'public'),
    },
    hot: true,
    historyApiFallback: true,
    watchFiles: path.relative(__dirname, 'src/pages')
  },
}