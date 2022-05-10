import Keys from './Keys';

class Keyboard extends Keys {
  constructor() {
    super();
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('room__keyboard', 'keyboard');
  }

  renderKeyboard = () => {
    this.keys.forEach((element) => {
      const button = new Keys();
      this.keyboard.append(button.renderKey(element));
    });
  };
}
export default Keyboard;
