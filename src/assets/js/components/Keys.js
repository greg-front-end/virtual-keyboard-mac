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
    this.textArea.classList.add('room__textarea');
    this.textArea.id = ('textarea');
    this.textArea.placeholder = 'RSS virtual keyboard\n\nThe keyboard created for macOS.\n\nFor change language press option + space. \n\nControl, commands values are emoji';
    this.renderTextArea = () => {
      return this.textArea;
    };
  }

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
        this.span.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
        break;
      case 'Enter':
        this.span.innerHTML = '\n';
        break;
      case 'ArrowLeft':
        this.span.innerHTML = '&#8592;';
        break;
      case 'ArrowUp':
        this.span.innerHTML = '&#8593;';
        break;
      case 'ArrowLeft':
        this.span.innerHTML = '&#8594;';
        break;
      case 'ArrowDown':
        this.span.innerHTML = '&#8595;';
        break;
      default:
        this.span.innerHTML = id[this.language][this.textCase];
        break;
    }
  };

  clickKey = (id) => {
    const click = (e) => {
      const area = document.querySelector('textarea');
      area.innerHTML += e.target;
    };

    switch (id) {
      case 'Tab':
        this.button.addEventListener('click', (e) => {
          click(e);
        });
        break;
    }
  };

  pressKey = (id) => {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.printTextArea();
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

  printTextArea = () => {
    console.log('here should be textarea')
    this.textArea.innerHTML += this.span.textContent;
  };
}
export default Keys;
