import backspaceImg from '../../icons/backspace.svg';
import tabImg from '../../icons/tab.svg';
import capsImg from '../../icons/capslock.svg';
import enterImg from '../../icons/enter.svg';
import shiftImg from '../../icons/shift.svg';
import langImg from '../../icons/lang.svg';
import controlImg from '../../icons/control.svg';
import optionImg from '../../icons/option.svg';
import commandImg from '../../icons/command.svg';
import arrowsImg from '../../icons/arrows.svg';

class Keyboard {
  constructor() {
    this.capslock = false;
    this.keyboard = document.createElement('div');

    this.keyboard.classList.add('room__keyboard', 'keyboard');

    this.keys = [
      {
        digits: 'digits',
        ru: {
          shiftUp: ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
          shiftDown: ['<', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'backspace'],
        },
        eng: {
          shiftUp: ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
          shiftDown: ['±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
        },
      },
      {
        tab: 'tab',
        ru: {
          shiftUp: ['\t', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
          shiftDown: ['\t', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
        },
        eng: {
          shiftUp: ['\t', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
          shiftDown: ['\t', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
        },
      },
      {
        caps: 'caps',
        ru: {
          shiftUp: ['capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё', 'enter'],
          shiftDown: ['capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Ё', 'enter'],
        },
        eng: {
          shiftUp: ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 'enter'],
          shiftDown: ['capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'enter'],
        },
      },
      {
        shift: 'shift',
        ru: {
          shiftUp: ['shift-left', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', 'shift-right'],
          shiftDown: ['shift-left', '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'shift-right'],
        },
        eng: {
          shiftUp: ['shift-left', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift-right'],
          shiftDown: ['shift-left', '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift-right'],
        },
      },
      {
        lang: 'lang',
        eng: {
          shiftUp: ['lang', 'control-left', 'option-left', 'command-left', 'space', 'command-right', 'option-right', 'arrow-left', 'arrow-up', 'arrow-down', 'arrow-right'],
          shiftDown: ['lang', 'control-left', 'option-left', 'command-left', 'space', 'command-right', 'option-right', 'arrow-left', 'arrow-up', 'arrow-down', 'arrow-right'],
        },
      },
    ];
  }

  renderKeyboard = () => {
    this.renderKeys();
  };

  renderKeys = () => {
    const btnFragment = document.createDocumentFragment();

    this.keys.forEach((row) => {
      const keyboardRows = document.createElement('div');
      keyboardRows.classList.add('keyboard__row');

      row.eng.shiftUp.forEach((value) => {
        const keyElement = document.createElement('button');
        const content = document.createElement('span');
        const img = document.createElement('img');
        const arrowUpDown = document.createElement('div');

        keyElement.classList.add('keyboard__key');
        keyElement.append(content);
        arrowUpDown.classList.add('keyboard__arrow-up-down', 'arrow-up-down');
        switch (value) {
          case 'backspace':
            keyElement.classList.add('backspace');
            keyElement.append(img);
            img.src = backspaceImg;
            img.alt = 'Backspace';
            break;
          case '\t':
            keyElement.classList.add('tab');
            keyElement.append(img);
            img.src = tabImg;
            img.alt = 'Tab';
            break;
          case 'capslock':
            keyElement.classList.add('capslock');
            keyElement.append(img);
            img.src = capsImg;
            img.alt = 'Capslock';
            break;
          case '\\':
            keyElement.classList.add('backslash');
            content.textContent = '\\';
            break;
          case 'w':
            keyElement.classList.add('key-w');
            content.textContent = value;
            break;
          case 'a':
            keyElement.classList.add('key-a');
            content.textContent = value;
            break;
          case 's':
            keyElement.classList.add('key-s');
            content.textContent = value;
            break;
          case 'd':
            keyElement.classList.add('key-d');
            content.textContent = value;
            break;
          case 'enter':
            keyElement.classList.add('enter');
            keyElement.append(img);
            img.src = enterImg;
            img.alt = 'Enter';
            break;
          case 'shift-left':
            keyElement.classList.add('shift-left');
            keyElement.append(img);
            img.src = shiftImg;
            img.alt = 'Shift-left';
            break;
          case 'shift-right':
            keyElement.classList.add('shift-right');
            keyElement.append(img);
            img.src = shiftImg;
            img.alt = 'Shift-right';
            break;
          case 'lang':
            keyElement.classList.add('language');
            keyElement.append(img);
            content.textContent = 'fn';
            img.src = langImg;
            img.alt = 'Language';
            break;
          case 'control-left':
            keyElement.classList.add('control-left');
            keyElement.prepend(img);
            content.textContent = 'control';
            img.src = controlImg;
            img.alt = 'Control-left';
            break;
          case 'option-left':
            keyElement.classList.add('option-left');
            keyElement.prepend(img);
            content.textContent = 'option';
            img.src = optionImg;
            img.alt = 'Option-left';
            break;
          case 'command-left':
            keyElement.classList.add('command-left');
            keyElement.prepend(img);
            content.textContent = 'command';
            img.src = commandImg;
            img.alt = 'Command-left';
            break;
          case 'space':
            keyElement.classList.add('space');
            break;
          case 'command-right':
            keyElement.classList.add('command-right');
            keyElement.prepend(img);
            content.textContent = 'command';
            img.src = commandImg;
            img.alt = 'Command-right';
            break;
          case 'option-right':
            keyElement.classList.add('option-right');
            keyElement.prepend(img);
            content.textContent = 'option';
            img.src = optionImg;
            img.alt = 'Option-right';
            break;
          case 'arrow-left':
            keyElement.classList.add('arrow-left');
            keyElement.append(img);
            img.src = arrowsImg;
            img.alt = 'Arrow-left';
            break;
          case 'arrow-up':
            keyElement.classList.add('arrow-up');
            keyElement.append(img);
            img.src = arrowsImg;
            img.alt = 'Arrow-up';
            break;
          case 'arrow-down':
            keyElement.classList.add('arrow-down');
            keyElement.append(img);
            img.src = arrowsImg;
            img.alt = 'Arrow-down';
            break;
          case 'arrow-right':
            keyElement.classList.add('arrow-right');
            keyElement.append(img);
            img.src = arrowsImg;
            img.alt = 'Arrow-right';
            break;
          default:
            content.textContent = value;
        }
        btnFragment.append(keyElement);
      });
      keyboardRows.append(btnFragment);
      this.keyboard.append(keyboardRows);
    });
  };
}
export default Keyboard;
