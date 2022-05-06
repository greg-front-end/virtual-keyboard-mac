import roomMonitorImage from '../../images/mac-monitor.png';
import roomBgVolumeIcon from '../../icons/volume.svg';
import roomBgMuteIcon from '../../icons/mute.svg';
import roomBgVideoFile from '../../video/keyboard-bg.mp4';
import roomDeskCactusImage from '../../images/cactus.png';
import Keyboard from './Keyboard';

class Room extends Keyboard {
  constructor() {
    super();
    this.main = document.createElement('main');
    this.section = document.createElement('section');
    this.roomBg = document.createElement('div');
    this.roomBgVideo = document.createElement('video');
    this.roomBgVideoSource = document.createElement('source');
    this.muteBtn = document.createElement('button');
    this.muteBtnImg = document.createElement('img');
    this.container = document.createElement('div');
    this.roomDesk = document.createElement('div');
    this.roomMonitor = document.createElement('div');
    this.roomMonitorImg = document.createElement('img');
    this.roomMonitorTextArea = document.createElement('textarea');
    this.roomDeskCactus = document.createElement('div');
    this.roomDeskCactusImg = document.createElement('img');

    this.main.classList.add('main');
    this.section.classList.add('room');
    this.roomBg.classList.add('room__bg');
    this.roomBgVideo.classList.add('room__video');
    this.roomBgVideo.autoplay = true;
    this.roomBgVideo.loop = true;
    this.roomBgVideo.muted = false;
    this.roomBgVideo.id = ('room__video');
    this.roomBgVideoSource.src = roomBgVideoFile;
    this.muteBtn.classList.add('room__bg-mute');
    this.muteBtnImg.classList.add('room__video-btn');
    this.muteBtnImg.src = roomBgVolumeIcon;
    this.muteBtnImg.alt = 'Mute';
    this.container.classList.add('container');
    this.roomDesk.classList.add('room__desk');
    this.roomMonitor.classList.add('room__monitor');
    this.roomMonitorImg.classList.add('room__screen-img');
    this.roomMonitorImg.src = roomMonitorImage;
    this.roomMonitorImg.alt = 'Monitor';
    this.roomMonitorTextArea.classList.add('room__textarea');
    this.roomMonitorTextArea.id = ('textarea');
    this.roomMonitorTextArea.placeholder = 'RSS virtual keyboard\n\nThe keyboard created for macOS.\n\nFor change language press control + space';
    this.roomDeskCactus.classList.add('room__cactus');
    this.roomDeskCactusImg.classList.add('room__cactus-img');
    this.roomDeskCactusImg.src = roomDeskCactusImage;
    this.roomDeskCactusImg.alt = 'Cactus';
    this.roomDesk.append(this.keyboard);

    this.muteBtn.addEventListener('click', () => {
      this.roomBgVideoMute();
    });
  }

  render = () => {
    document.querySelector('body').append(this.main);
    this.main.append(this.section);
    this.section.append(this.roomBg);
    this.section.append(this.muteBtn);
    this.section.append(this.container);
    this.roomBg.append(this.roomBgVideo);
    this.roomBgVideo.append(this.roomBgVideoSource);
    this.muteBtn.append(this.muteBtnImg);
    this.container.append(this.roomDesk);
    this.roomDesk.append(this.roomMonitor);
    this.roomMonitor.append(this.roomMonitorImg);
    this.roomMonitor.append(this.roomMonitorTextArea);
    this.roomDesk.append(this.roomDeskCactus);
    this.roomDeskCactus.append(this.roomDeskCactusImg);
    this.roomMonitorTextArea.focus();
  };

  roomBgVideoMute = () => {
    if (!this.roomBgVideo.muted) {
      this.roomBgVideo.muted = true;
      this.muteBtnImg.src = roomBgMuteIcon;
    } else {
      this.roomBgVideo.muted = false;
      this.muteBtnImg.src = roomBgVolumeIcon;
    }
  };
}
export default Room;
