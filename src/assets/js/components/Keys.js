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
    this.isCapslock = localStorage.getItem('isCapslock') || false;
    this.isShift = localStorage.getItem('isShift') || false;
    this.textCase = localStorage.getItem('case') || 'low';
    this.altLeftLang = localStorage.getItem('altLeftLang') || false;
    this.button = document.createElement('button');
    this.span = document.createElement('span');
    this.buttonImg = document.createElement('img');
    this.language = localStorage.getItem('language') || 'en';
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
        this.button.addEventListener('click', () => {
          if (!this.isCapslock) {
            this.button.classList.add('active');
            this.isCapslock = true;
            localStorage.setItem('isCapslock', this.isCapslock);
            this.textCase = 'high';
            localStorage.setItem('case', this.textCase);
          } else {
            this.button.classList.remove('active');
            this.isCapslock = false;
            localStorage.setItem('isCapslock', this.isCapslock);
            this.textCase = 'low';
            localStorage.setItem('case', this.textCase);
          }
        });
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
        this.span.innerHTML = id[this.language][this.textCase];
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
        localStorage.setItem('case', this.textCase);
        this.setButtonValue(id);
        this.isCapslock = true;
        localStorage.setItem('isCapslock', this.isCapslock);
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.textCase = 'high';
        localStorage.setItem('case', this.textCase);
        this.setButtonValue(id);
        this.isShift = true;
        localStorage.setItem('isShift', this.isShift);
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'CapsLock' && this.isCapslock) {
        this.textCase = 'low';
        localStorage.setItem('case', this.textCase);
        this.setButtonValue(id);
        this.isCapslock = false;
        localStorage.setItem('isCapslock', this.isCapslock);
      }
      if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && this.isShift) {
        this.textCase = 'low';
        localStorage.setItem('case', this.textCase);
        this.setButtonValue(id);
        this.isCapslock = false;
        this.isShift = false;
        localStorage.setItem('isShift', this.isShift);
        localStorage.setItem('isCapslock', this.isCapslock);
      }
    });
  };

  toggleLanguage = (id) => {
    if (!this.altLeftLang) {
      document.addEventListener('keydown', (e) => {
        if (e.code === 'AltLeft' || e.code === 'AltRight') {
          this.altLeftLang = true;
          localStorage.setItem('altLeftLang', this.altLeftLang);
        }
        if (e.code === 'Space' && this.altLeftLang) {
          e.preventDefault();
          this.language = this.language === 'en' ? this.language = 'ru' : this.language = 'en';
          localStorage.setItem('language', this.language);
          this.altLeftLang = false;
          localStorage.setItem('altLeftLang', this.altLeftLang);
          this.setButtonValue(id);
        }
      });
    }
  };
}
export default Keys;
