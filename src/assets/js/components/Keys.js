import backspaceImg from '../../icons/backspace.svg';
import tabImg from '../../icons/tab.svg';
import capsImg from '../../icons/capslock.svg';
import enterImg from '../../icons/enter.svg';
import shiftImg from '../../icons/shift.svg';
import controlImg from '../../icons/control.svg';
import optionImg from '../../icons/option.svg';
import commandImg from '../../icons/command.svg';

class Keys {
  constructor() {
    this.isCapslock = false;
    this.isShift = false;
    this.textCase = 'low';
    this.altLeftLang = false;
    this.languageDoubleKeys = [];
    this.button = document.createElement('button');
    this.span = document.createElement('span');
    this.buttonImg = document.createElement('img');
    this.language = localStorage.getItem('language') || 'en';
    this.textArea = document.createElement('textarea');
    this.keys = [
      {
        en: {
          low: '§',
          high: '±',
        },
        ru: {
          low: '>',
          high: '<',
        },
        id: 'Backquote',
      },
      {
        en: {
          low: '1',
          high: '!',
        },
        ru: {
          low: '1',
          high: '!',
        },
        id: 'Digit1',
      },
      {
        en: {
          low: '2',
          high: '@',
        },
        ru: {
          low: '2',
          high: '"',
        },
        id: 'Digit2',
      },
      {
        en: {
          low: '3',
          high: '#',
        },
        ru: {
          low: '3',
          high: '№',
        },
        id: 'Digit3',
      },
      {
        en: {
          low: '4',
          high: '$',
        },
        ru: {
          low: '4',
          high: ';',
        },
        id: 'Digit4',
      },
      {
        en: {
          low: '5',
          high: '%',
        },
        ru: {
          low: '5',
          high: '%',
        },
        id: 'Digit5',
      },
      {
        en: {
          low: '6',
          high: '^',
        },
        ru: {
          low: '6',
          high: ':',
        },
        id: 'Digit6',
      },
      {
        en: {
          low: '7',
          high: '&',
        },
        ru: {
          low: '7',
          high: '?',
        },
        id: 'Digit7',
      },
      {
        en: {
          low: '8',
          high: '*',
        },
        ru: {
          low: '8',
          high: '*',
        },
        id: 'Digit8',
      },
      {
        en: {
          low: '9',
          high: '(',
        },
        ru: {
          low: '9',
          high: '(',
        },
        id: 'Digit9',
      },
      {
        en: {
          low: '0',
          high: ')',
        },
        ru: {
          low: '0',
          high: ')',
        },
        id: 'Digit0',
      },
      {
        en: {
          low: '-',
          high: '_',
        },
        ru: {
          low: '-',
          high: '_',
        },
        id: 'Minus',
      },
      {
        en: {
          low: '=',
          high: '+',
        },
        ru: {
          low: '=',
          high: '+',
        },
        id: 'Equal',
      },
      {
        en: {
          low: 'backspace',
          high: 'backspace',
        },
        ru: {
          low: 'backspace',
          high: 'backspace',
        },
        id: 'Backspace',
      },
      {
        en: {
          low: 'keyboard_tab',
          high: 'keyboard_tab',
        },
        ru: {
          low: 'keyboard_tab',
          high: 'keyboard_tab',
        },
        id: 'Tab',
      },
      {
        en: {
          low: 'q',
          high: 'Q',
        },
        ru: {
          low: 'й',
          high: 'Й',
        },
        id: 'KeyQ',
      },
      {
        en: {
          low: 'w',
          high: 'W',
        },
        ru: {
          low: 'ц',
          high: 'Ц',
        },
        id: 'KeyW',
      },
      {
        en: {
          low: 'e',
          high: 'E',
        },
        ru: {
          low: 'у',
          high: 'У',
        },
        id: 'KeyE',
      },
      {
        en: {
          low: 'r',
          high: 'R',
        },
        ru: {
          low: 'к',
          high: 'К',
        },
        id: 'KeyR',
      },
      {
        en: {
          low: 't',
          high: 'T',
        },
        ru: {
          low: 'е',
          high: 'Е',
        },
        id: 'KeyT',
      },
      {
        en: {
          low: 'y',
          high: 'Y',
        },
        ru: {
          low: 'н',
          high: 'Н',
        },
        id: 'KeyY',
      },
      {
        en: {
          low: 'u',
          high: 'U',
        },
        ru: {
          low: 'г',
          high: 'Г',
        },
        id: 'KeyU',
      },
      {
        en: {
          low: 'i',
          high: 'I',
        },
        ru: {
          low: 'ш',
          high: 'Ш',
        },
        id: 'KeyI',
      },
      {
        en: {
          low: 'o',
          high: 'O',
        },
        ru: {
          low: 'щ',
          high: 'Щ',
        },
        id: 'KeyO',
      },
      {
        en: {
          low: 'p',
          high: 'P',
        },
        ru: {
          low: 'з',
          high: 'З',
        },
        id: 'KeyP',
      },
      {
        en: {
          low: '[',
          high: '{',
        },
        ru: {
          low: 'х',
          high: 'Х',
        },
        id: 'BracketLeft',
      },
      {
        en: {
          low: ']',
          high: '}',
        },
        ru: {
          low: 'ъ',
          high: 'Ъ',
        },
        id: 'BracketRight',
      },
      {
        en: {
          low: '',
          high: '',
        },
        ru: {
          low: '',
          high: '',
        },
        id: 'CapsLock',
      },
      {
        en: {
          low: 'a',
          high: 'A',
        },
        ru: {
          low: 'ф',
          high: 'Ф',
        },
        id: 'KeyA',
      },
      {
        en: {
          low: 's',
          high: 'S',
        },
        ru: {
          low: 'ы',
          high: 'Ы',
        },
        id: 'KeyS',
      },
      {
        en: {
          low: 'd',
          high: 'D',
        },
        ru: {
          low: 'в',
          high: 'В',
        },
        id: 'KeyD',
      },
      {
        en: {
          low: 'f',
          high: 'F',
        },
        ru: {
          low: 'а',
          high: 'А',
        },
        id: 'KeyF',
      },
      {
        en: {
          low: 'g',
          high: 'G',
        },
        ru: {
          low: 'п',
          high: 'П',
        },
        id: 'KeyG',
      },
      {
        en: {
          low: 'h',
          high: 'H',
        },
        ru: {
          low: 'р',
          high: 'Р',
        },
        id: 'KeyH',
      },
      {
        en: {
          low: 'j',
          high: 'J',
        },
        ru: {
          low: 'о',
          high: 'О',
        },
        id: 'KeyJ',
      },
      {
        en: {
          low: 'k',
          high: 'K',
        },
        ru: {
          low: 'л',
          high: 'Л',
        },
        id: 'KeyK',
      },
      {
        en: {
          low: 'l',
          high: 'L',
        },
        ru: {
          low: 'д',
          high: 'Д',
        },
        id: 'KeyL',
      },
      {
        en: {
          low: ';',
          high: ':',
        },
        ru: {
          low: 'ж',
          high: 'Ж',
        },
        id: 'Semicolon',
      },
      {
        en: {
          low: "'",
          high: '"',
        },
        ru: {
          low: 'э',
          high: 'Э',
        },
        id: 'Quote',
      },
      {
        en: {
          low: '\\',
          high: '|',
        },
        ru: {
          low: 'ё',
          high: 'Ё',
        },
        id: 'Backslash',
      },
      {
        en: {
          low: 'keyboard_return',
          high: 'keyboard_return',
        },
        ru: {
          low: 'keyboard_return',
          high: 'keyboard_return',
        },
        id: 'Enter',
      },
      {
        en: {
          low: 'Shift',
          high: 'Shift',
        },
        ru: {
          low: 'Shift',
          high: 'Shift',
        },
        id: 'ShiftLeft',
      },
      {
        en: {
          low: '`',
          high: '~',
        },
        ru: {
          low: ']',
          high: '[',
        },
        id: 'IntlBackslash',
      },
      {
        en: {
          low: 'z',
          high: 'Z',
        },
        ru: {
          low: 'я',
          high: 'Я',
        },
        id: 'KeyZ',
      },
      {
        en: {
          low: 'x',
          high: 'X',
        },
        ru: {
          low: 'ч',
          high: 'Ч',
        },
        id: 'KeyX',
      },
      {
        en: {
          low: 'c',
          high: 'C',
        },
        ru: {
          low: 'с',
          high: 'С',
        },
        id: 'KeyC',
      },
      {
        en: {
          low: 'v',
          high: 'V',
        },
        ru: {
          low: 'м',
          high: 'М',
        },
        id: 'KeyV',
      },
      {
        en: {
          low: 'b',
          high: 'B',
        },
        ru: {
          low: 'и',
          high: 'И',
        },
        id: 'KeyB',
      },
      {
        en: {
          low: 'n',
          high: 'N',
        },
        ru: {
          low: 'т',
          high: 'Т',
        },
        id: 'KeyN',
      },
      {
        en: {
          low: 'm',
          high: 'M',
        },
        ru: {
          low: 'ь',
          high: 'Ь',
        },
        id: 'KeyM',
      },
      {
        en: {
          low: ',',
          high: '<',
        },
        ru: {
          low: 'б',
          high: 'Б',
        },
        id: 'Comma',
      },
      {
        en: {
          low: '.',
          high: '>',
        },
        ru: {
          low: 'ю',
          high: 'Ю',
        },
        id: 'Period',
      },
      {
        en: {
          low: '/',
          high: '?',
        },
        ru: {
          low: '.',
          high: ',',
        },
        id: 'Slash',
      },
      {
        en: {
          low: 'Shift',
          high: 'Shift',
        },
        ru: {
          low: 'Shift',
          high: 'Shift',
        },
        id: 'ShiftRight',
      },
      {
        en: {
          low: 'control',
          high: 'control',
        },
        ru: {
          low: 'control',
          high: 'control',
        },
        id: 'ControlLeft',
      },
      {
        en: {
          low: 'option',
          high: 'option',
        },
        ru: {
          low: 'option',
          high: 'option',
        },
        id: 'AltLeft',
      },
      {
        en: {
          low: 'command',
          high: 'command',
        },
        ru: {
          low: 'command',
          high: 'command',
        },
        id: 'MetaLeft',
      },
      {
        en: {
          low: 'space_bar',
          high: 'space_bar',
        },
        ru: {
          low: 'space_bar',
          high: 'space_bar',
        },
        id: 'Space',
      },
      {
        en: {
          low: 'command',
          high: 'command',
        },
        ru: {
          low: 'command',
          high: 'command',
        },
        id: 'MetaRight',
      },
      {
        en: {
          low: 'option',
          high: 'option',
        },
        ru: {
          low: 'option',
          high: 'option',
        },
        id: 'AltRight',
      },
      {
        en: {
          low: '&#8592;',
          high: '&#8592;',
        },
        ru: {
          low: '&#8592;',
          high: '&#8592;',
        },
        id: 'ArrowLeft',
      },
      {
        en: {
          low: '&#8593;',
          high: '&#8593;',
        },
        ru: {
          low: '&#8593;',
          high: '&#8593;',
        },
        id: 'ArrowUp',
      },
      {
        en: {
          low: '&#8595;',
          high: '&#8595;',
        },
        ru: {
          low: '&#8595;',
          high: '&#8595;',
        },
        id: 'ArrowDown',
      },
      {
        en: {
          low: '&#8594;',
          high: '&#8594;',
        },
        ru: {
          low: '&#8594;',
          high: '&#8594;',
        },
        id: 'ArrowRight',
      },
    ];
  }

  renderTextArea = () => {
    this.textArea.classList.add('room__textarea');
    this.textArea.id = ('textarea');
    this.textArea.placeholder = 'RSS virtual keyboard\n\nThe keyboard created for macOS.\n\nFor change language press option + space. \n\nControl, commands values are emoji';
    this.keys.forEach((keys) => {
      document.addEventListener('keydown', (e) => {
        if (e.code === keys.id) {
          this.renderKey(keys);
          if (e.code === 'MetaRight' || e.code === 'MetaLeft') {
            this.span.innerHTML = '&#129323;';
          }
          if (e.code === 'AltLeft' || e.code === 'AltRight') {
            this.span.innerHTML = '';
          }
          if (e.code === 'ControlLeft') {
            this.span.innerHTML = '&#129313;';
          }
          if (e.code === 'Backspace') {
            if (this.textArea.selectionStart === 0 && this.textArea.selectionEnd === 0) return;
            if (this.textArea.selectionStart === this.textArea.selectionEnd) {
              this.textArea.setRangeText('', this.textArea.selectionStart - 1, this.textArea.selectionStart, 'end');
            } else {
              this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
            }
          }
          this.textArea.setRangeText(this.span.textContent, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        }
      });
    });

    return this.textArea;
  };

  renderKey = (keys) => {
    this.button.classList.add('keyboard__key');
    switch (keys.id) {
      case 'Backspace':
        this.button.append(this.buttonImg);
        this.button.classList.add('backspace');
        this.buttonImg.src = backspaceImg;
        this.buttonImg.alt = 'backspace';
        break;
      case 'Tab':
        this.button.append(this.buttonImg);
        this.button.classList.add('tab');
        this.buttonImg.src = tabImg;
        this.buttonImg.alt = 'tab';
        break;
      case 'CapsLock':
        this.button.append(this.buttonImg);
        this.button.append(this.span);
        this.button.classList.add('capslock');
        this.buttonImg.src = capsImg;
        this.buttonImg.alt = 'backspace';
        break;
      case 'Backslash':
        this.button.classList.add('backslash');
        this.button.append(this.span);
        break;
      case 'Enter':
        this.button.append(this.buttonImg);
        this.button.classList.add('enter');
        this.buttonImg.src = enterImg;
        this.buttonImg.alt = 'enter';
        break;
      case 'ShiftLeft':
        this.button.append(this.buttonImg);
        this.button.classList.add('shift-left');
        this.buttonImg.src = shiftImg;
        this.buttonImg.alt = 'shift left';
        break;
      case 'ShiftRight':
        this.button.append(this.buttonImg);
        this.button.classList.add('shift-right');
        this.buttonImg.src = shiftImg;
        this.buttonImg.alt = 'shift right';
        break;
      case 'ControlLeft':
        this.button.append(this.buttonImg);
        this.button.append(this.span);
        this.button.classList.add('control-left');
        this.buttonImg.src = controlImg;
        this.buttonImg.alt = 'control left';
        break;
      case 'AltLeft':
        this.button.append(this.buttonImg);
        this.button.append(this.span);
        this.button.classList.add('option-left');
        this.buttonImg.src = optionImg;
        this.buttonImg.alt = 'option left';
        break;
      case 'MetaLeft':
        this.button.append(this.buttonImg);
        this.button.append(this.span);
        this.button.classList.add('command-left');
        this.buttonImg.src = commandImg;
        this.buttonImg.alt = 'command left';
        break;
      case 'Space':
        this.button.classList.add('space');
        break;
      case 'MetaRight':
        this.button.append(this.buttonImg);
        this.button.append(this.span);
        this.button.classList.add('command-right');
        this.buttonImg.src = commandImg;
        this.buttonImg.alt = 'command right';
        break;
      case 'AltRight':
        this.button.append(this.buttonImg);
        this.button.append(this.span);
        this.button.classList.add('option-right');
        this.buttonImg.src = optionImg;
        this.buttonImg.alt = 'option right';
        break;
      case 'ArrowLeft':
        this.button.append(this.span);
        this.button.classList.add('arrow-left');
        break;
      case 'ArrowUp':
        this.button.append(this.span);
        this.button.classList.add('arrow-up');
        break;
      case 'ArrowDown':
        this.button.append(this.span);
        this.button.classList.add('arrow-down');
        break;
      case 'ArrowRight':
        this.button.append(this.span);
        this.button.classList.add('arrow-right');
        break;
      case 'KeyW':
        this.button.append(this.span);
        this.button.classList.add('key-w');
        break;
      case 'KeyA':
        this.button.append(this.span);
        this.button.classList.add('key-a');
        break;
      case 'KeyS':
        this.button.append(this.span);
        this.button.classList.add('key-s');
        break;
      case 'KeyD':
        this.button.append(this.span);
        this.button.classList.add('key-d');
        break;
      default:
        this.button.append(this.span);
        break;
    }
    this.setButtonValue(keys);
    this.toggleLanguage(keys);
    this.toggleTextCase(keys);
    this.pressKey(keys.id);
    return this.button;
  };

  setButtonValue = (id) => {
    switch (id.id) {
      case 'Tab':
        this.span.innerHTML = '&#160;&#160;&#160;&#160;';
        break;
      case 'Enter':
        this.span.innerHTML = '\n';
        break;
      case 'Space':
        this.span.innerHTML = ' ';
        break;
      case 'Backspace':
        this.span.innerHTML = '';
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.span.innerHTML = '';
        break;
      case 'ArrowLeft':
        this.span.innerHTML = '&#8592;';
        break;
      case 'ArrowUp':
        this.span.innerHTML = '&#8593;';
        break;
      case 'ArrowRight':
        this.span.innerHTML = '&#8594;';
        break;
      case 'ArrowDown':
        this.span.innerHTML = '&#8595;';
        break;
      default:
        this.innerHTML = id[this.language][this.textCase];
        break;
    }
  };

  pressKey = (id) => {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (id === e.code) {
        this.button.classList.add('active');
      }
    });
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (id === e.code) {
        this.button.classList.remove('active');
      }
    });
  };

  toggleTextCase = (id) => {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'CapsLock' && !this.isCapslock) {
        this.textCase = 'high';
        this.setButtonValue(id);
        this.isCapslock = true;
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.textCase = 'high';
        this.setButtonValue(id);
        this.isShift = true;
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'CapsLock' && this.isCapslock) {
        this.textCase = 'low';
        this.setButtonValue(id);
        this.isCapslock = false;
      }
      if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && this.isShift) {
        this.textCase = 'low';
        this.setButtonValue(id);
        this.isCapslock = false;
        this.isShift = false;
      }
    });
  };

  toggleLanguage = (id) => {
    if (!this.altLeftLang) {
      document.addEventListener('keydown', (e) => {
        if (e.code === 'AltLeft' || e.code === 'AltRight') {
          this.altLeftLang = true;
        }
        if (e.code === 'Space' && this.altLeftLang) {
          e.preventDefault();
          this.language = this.language === 'en' ? this.language = 'ru' : this.language = 'en';
          localStorage.setItem('language', this.language);
          this.altLeftLang = false;
          this.setButtonValue(id);
        }
      });
    }
  };
}
export default Keys;
