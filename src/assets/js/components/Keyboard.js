import Keys from './Keys';

class Keyboard {
  constructor() {
    this.language = localStorage.getItem('language') || 'en';
    this.isUpperCase = 'low';
    this.isCapslock = false;
    this.isShift = false;
    this.isOptionPress = false;
    this.buttons = [];
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('room__keyboard', 'keyboard');
    this.textArea = document.createElement('textarea');
    this.textArea.classList.add('room__textarea');
    this.textArea.id = ('textarea');
    this.textArea.placeholder = 'RSS virtual keyboard\n\nThe keyboard created for macOS.\n\nFor change language press option';
    this.textArea.addEventListener('blur', () => this.textArea.focus());
    this.textArea.setAttribute('autofocus', true);
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
    this.keys.forEach((keys) => {
      document.addEventListener('keydown', (e) => {
        if (e.code === keys.id) {
          const btn = new Keys();
          btn.renderKey(keys);
          if (e.code === 'MetaRight' || e.code === 'MetaLeft') {
            btn.span.innerHTML = '&#129323;';
          }
          if (e.code === 'CapsLock' && !this.isCapslock) {
            this.isUpperCase = 'high';
            this.updateKeysValues();
            this.isCapslock = true;
          }
          if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            this.isUpperCase = 'high';
            this.updateKeysValues();
            this.isShift = true;
          }
          if (e.code === 'AltLeft' || e.code === 'AltRight') {
            e.preventDefault();
            btn.span.textContent = '';
            this.toggleLanguage();
            this.updateKeysValues();
          }
          if (e.code === 'ControlLeft') {
            btn.span.innerHTML = '&#129313;';
          }
          if (e.code === 'Backspace') {
            if (this.textArea.selectionStart === 0 && this.textArea.selectionEnd === 0) return;
            if (this.textArea.selectionStart === this.textArea.selectionEnd) {
              this.textArea.setRangeText('', this.textArea.selectionStart - 1, this.textArea.selectionStart, 'end');
            } else {
              this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
            }
          }
          this.textArea.addEventListener('blur', () => this.textArea.focus());
          this.textArea.setRangeText(btn.span.textContent, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        }
      });
      document.addEventListener('keyup', (e) => {
        this.isOptionPress = false;
        if (e.code === 'CapsLock' && this.isCapslock) {
          this.isUpperCase = 'low';
          this.isCapslock = false;
          this.updateKeysValues();
        }
        if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && this.isShift) {
          this.isUpperCase = 'low';
          this.isCapslock = false;
          this.isShift = false;
          this.updateKeysValues();
        }
      });
    });
    return this.textArea;
  };

  renderKeyboard = () => {
    this.keys.forEach((element) => {
      const button = new Keys();
      this.buttons.push(button.renderKey(element));
    });
    this.buttons.forEach((button) => {
      this.keyboard.append(button);
    });
    this.clickButtonSetArea();
  };

  updateKeysValues = () => {
    this.buttons.reduce((buttonss, button, idx) => {
      if (button.firstChild && button.lastChild && button.firstChild.nodeName === 'SPAN') {
        if (!button.classList.contains('arrow-left') && !button.classList.contains('arrow-right') && !button.classList.contains('arrow-up') && !button.classList.contains('arrow-down')) {
          const btn = button;
          btn.firstChild.textContent = this.keys[idx][this.language][this.isUpperCase];
          buttonss.push(btn);
        }
      }
      if (button.firstChild && button.lastChild && button.lastChild.nodeName === 'SPAN') {
        if (!button.classList.contains('arrow-left') && !button.classList.contains('arrow-right') && !button.classList.contains('arrow-up') && !button.classList.contains('arrow-down')) {
          const btn = button;
          btn.lastChild.textContent = this.keys[idx][this.language][this.isUpperCase];
          buttonss.push(btn);
        }
      }
      return buttonss;
    }, []);
  };

  toggleLanguage = () => {
    if (!this.isOptionPress) {
      this.isOptionPress = true;
      this.language = this.language === 'en' ? this.language = 'ru' : this.language = 'en';
      localStorage.setItem('language', this.language);
    } else {
      this.isOptionPress = false;
      this.language = this.language === 'en' ? this.language = 'ru' : this.language = 'en';
      localStorage.setItem('language', this.language);
    }
  };

  toggCapslock = () => {
    if (!this.isCapslock && !this.isShift) {
      this.isCapslock = true;
      this.isUpperCase = this.isUpperCase === 'low' ? this.isUpperCase = 'high' : this.isUpperCase = 'low';
    } else {
      this.isCapslock = false;
      this.isUpperCase = this.isUpperCase === 'low' ? this.isUpperCase = 'high' : this.isUpperCase = 'low';
    }
  };

  toggleShift = () => {
    if (!this.isCapslock) {
      if (!this.isShift) {
        this.isShift = true;
        this.isUpperCase = this.isUpperCase === 'low' ? this.isUpperCase = 'high' : this.isUpperCase = 'low';
      } else {
        this.isShift = false;
        this.isUpperCase = this.isUpperCase === 'low' ? this.isUpperCase = 'high' : this.isUpperCase = 'low';
      }
    }
  };

  clickButtonSetArea = () => {
    this.keyboard.addEventListener('click', (e) => {
      if (!e.target.classList.contains('keyboard')) {
        if (e.target.closest('.capslock')) {
          if (!this.isCapslock) {
            this.toggCapslock();
            this.updateKeysValues();
            e.target.classList.add('active');
          } else {
            this.toggCapslock();
            this.updateKeysValues();
            e.target.classList.remove('active');
          }
        } else if (e.target.closest('.backspace')) {
          if (this.textArea.selectionStart === 0 && this.textArea.selectionEnd === 0) return;
          if (this.textArea.selectionStart === this.textArea.selectionEnd) {
            this.textArea.setRangeText('', this.textArea.selectionStart - 1, this.textArea.selectionStart, 'end');
          } else {
            this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
          }
        } else if (e.target.closest('.tab')) {
          e.preventDefault();
          this.textArea.setRangeText('    ', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        } else if (e.target.closest('.enter')) {
          this.textArea.setRangeText('\n', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        } else if (e.target.closest('.shift-left') || e.target.closest('.shift-right')) {
          e.preventDefault();
          if (!this.isShift) {
            this.toggleShift();
            this.updateKeysValues();
          } else {
            this.toggleShift();
            this.updateKeysValues();
          }
        } else if (e.target.closest('.control-left')) {
          e.preventDefault();
          this.textArea.innerHTML = '';
        } else if (e.target.closest('.option-left') || e.target.closest('.option-right')) {
          if (!this.isOptionPress) {
            this.toggleLanguage();
            this.updateKeysValues();
          } else {
            this.toggleLanguage();
            this.updateKeysValues();
          }
        } else if (e.target.closest('.command-left') || e.target.closest('.command-right')) {
          e.preventDefault();
          this.textArea.innerHTML = '';
        } else if (e.target.closest('.space')) {
          this.textArea.setRangeText(' ', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        } else {
          this.textArea.setRangeText(e.target.textContent, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        }
      }
    });
  };
}
export default Keyboard;
