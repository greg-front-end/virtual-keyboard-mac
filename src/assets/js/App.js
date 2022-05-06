import Room from './components/Room';

const App = () => {
  const room = new Room();
  room.render();
  room.renderKeyboard();
};
export default App;
