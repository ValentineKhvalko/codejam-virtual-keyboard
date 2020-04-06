const firstRowCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const secondRowCode = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const thirdRowCode = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const fourthRowCode = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const fifthRowCode = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const eventCodeArr = [
  firstRowCode,
  secondRowCode,
  thirdRowCode,
  fourthRowCode,
  fifthRowCode,
];

const codes = [
  ...firstRowCode,
  ...secondRowCode,
  ...thirdRowCode,
  ...fourthRowCode,
  ...fifthRowCode,
];

const firstRowKeyEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const secondRowKeyEng = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92'];
const thirdRowKeyEng = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const fourthRowKeyEng = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift'];
const fifthRowKeyEng = ['Control', 'Meta', 'Alt', '&nbsp', 'Alt', '&#9668', '&#9660', '&#9658', 'Control'];

const englLetters = [
  firstRowKeyEng,
  secondRowKeyEng,
  thirdRowKeyEng,
  fourthRowKeyEng,
  fifthRowKeyEng,
];

const firstRowKeyEngShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const secondRowKeyEngShift = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'];
const thirdRowKeyEngShift = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
const fourthRowKeyEngShift = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650', 'Shift'];
const fifthRowKeyEngShift = ['Control', 'Meta', 'Alt', '&nbsp', 'Alt', '&#9668', '&#9660', '&#9658', 'Control'];

const englShiftLetters = [
  firstRowKeyEngShift,
  secondRowKeyEngShift,
  thirdRowKeyEngShift,
  fourthRowKeyEngShift,
  fifthRowKeyEngShift,
];

const firstRowKeyRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const secondRowkeyRu = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92'];
const thirdRowKeyRu = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const fourthRowKeyRu = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift'];
const fifthRowKeyRu = ['Control', 'Meta', 'Alt', '&nbsp', 'Alt', '&#9668', '&#9660', '&#9658', 'Control'];

const ruLetters = [
  firstRowKeyRu,
  secondRowkeyRu,
  thirdRowKeyRu,
  fourthRowKeyRu,
  fifthRowKeyRu,
];

const firstRowKeyRuShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];
const secondRowkeyRuShift = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'];
const thirdRowKeyRuShift = ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];
const fourthRowKeyRuShift = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650', 'Shift'];
const fifthRowKeyRuShift = ['Control', 'Meta', 'Alt', '&nbsp', 'Alt', '&#9668', '&#9660', '&#9658', 'Control'];

const ruShiftLetters = [
  firstRowKeyRuShift,
  secondRowkeyRuShift,
  thirdRowKeyRuShift,
  fourthRowKeyRuShift,
  fifthRowKeyRuShift,
];

const body = document.querySelector('body');
const container = document.createElement('div');
const input = document.createElement('textarea');
const keyBord = document.createElement('div');
const explanatoryText = document.createElement('p');
explanatoryText.innerHTML = 'Переключаение языков Ctrl + Alt <br> Клавиатура была создана в OC Win';

const localStorageChoosedLanguageKey = 'choosedLanguage';
const defaultLanguage = 'en';

const getCurrentLang = () => localStorage.getItem(localStorageChoosedLanguageKey)
|| defaultLanguage;
const getNextLanguage = () => (getCurrentLang() === 'ru' ? 'en' : 'ru');

function changeLanguage(lang) {
  localStorage.setItem(localStorageChoosedLanguageKey, lang);
  if (lang === 'ru') {
    document.querySelectorAll('.spanRu').forEach((el) => {
      const elem = el;
      elem.style.display = 'block';
    });

    document.querySelectorAll('.spanEng').forEach((el) => {
      const elem = el;
      elem.style.display = 'none';
    });
  } else if (lang === 'en') {
    document.querySelectorAll('.spanRu').forEach((el) => {
      const elem = el;
      elem.style.display = 'none';
    });

    document.querySelectorAll('.spanEng').forEach((el) => {
      const elem = el;
      elem.style.display = 'block';
    });
  }
}

function shiftAndCapsDownAndUp(event) {
  if (document.querySelector('.engCapsLetter').style.display === 'none') {
    document.querySelectorAll('.engCapsLetter').forEach((el) => {
      const elem = el;
      elem.style.display = 'block';
    });
    document.querySelectorAll('.engLetters').forEach((el) => {
      const elem = el;
      elem.style.display = 'none';
    });
  } else if (!event.repeat) {
    document.querySelectorAll('.engCapsLetter').forEach((el) => {
      const elem = el;
      elem.style.display = 'none';
    });
    document.querySelectorAll('.engLetters').forEach((el) => {
      const elem = el;
      elem.style.display = 'block';
    });
  }

  if (document.querySelector('.ruCapsLetter').style.display === 'none') {
    document.querySelectorAll('.ruCapsLetter').forEach((el) => {
      const elem = el;
      elem.style.display = 'block';
    });
    document.querySelectorAll('.ruLetter').forEach((el) => {
      const elem = el;
      elem.style.display = 'none';
    });
  } else if (!event.repeat) {
    document.querySelectorAll('.ruCapsLetter').forEach((el) => {
      const elem = el;
      elem.style.display = 'none';
    });
    document.querySelectorAll('.ruLetter').forEach((el) => {
      const elem = el;
      elem.style.display = 'block';
    });
  }
}

function innerTextInTextarea(event) {
  if (event.classList.contains('backspace')) {
    input.value = input.value.substring(0, input.value.length - 1);
  }
  if (event.classList.contains('alt')
      || event.classList.contains('control')
      || event.classList.contains('meta-left')
      || event.classList.contains('shift')
      || event.classList.contains('caps-lock')) {
    return false;
  }
  if (event.classList.contains('tab')) {
    input.value += ' ';
  }
  if (event.classList.contains('enter')) {
    input.value += '\n';
  }
  if (event.classList.contains('k-key') || event.classList.contains('s-key')) {
    input.value += event.innerText;
  }
  return false;
}

function init() {
  container.classList.add('container');
  body.append(container);

  input.classList.add('input');
  container.append(input);
  input.setAttribute('readonly', 'readonly');

  keyBord.classList.add('keybord');
  container.append(keyBord);

  container.append(explanatoryText);

  for (let i = 0; i < eventCodeArr.length; i += 1) {
    // keybord row
    const divRow = document.createElement('div');
    keyBord.append(divRow);
    divRow.classList.add('divRow');
    for (let j = 0; j < eventCodeArr[i].length; j += 1) {
      // key
      const key = document.createElement('div');
      document.querySelectorAll('.divRow')[i].append(key);
      key.classList.add('k-key');
      key.classList.add(`${eventCodeArr[i][j]}`);

      const spanEng = document.createElement('span');
      const spanRu = document.createElement('span');

      // eng span
      key.append(spanEng);
      spanEng.classList.add('spanEng');
      spanEng.style.display = 'block';

      // eng letters
      const engLetters = document.createElement('span');
      engLetters.classList.add('engLetters');
      engLetters.innerHTML = englLetters[i][j];
      spanEng.append(engLetters);
      engLetters.classList.add('s-key');

      // eng shift letters
      const engCapsLetter = document.createElement('span');
      engCapsLetter.classList.add('engCapsLetter');
      engCapsLetter.innerHTML = englShiftLetters[i][j];
      spanEng.append(engCapsLetter);
      engCapsLetter.classList.add('s-key');
      engCapsLetter.style.display = 'none';

      // ru span
      key.append(spanRu);
      spanRu.classList.add('spanRu');
      spanRu.classList.add('s-key');

      // ru letters
      const ruLetter = document.createElement('span');
      ruLetter.classList.add('ruLetter');
      ruLetter.innerHTML = ruLetters[i][j];
      spanRu.append(ruLetter);
      ruLetter.classList.add('s-key');
      ruLetter.style.display = 'block';

      // ru shift letters
      const ruCapsLetter = document.createElement('span');
      ruCapsLetter.classList.add('ruCapsLetter');
      ruCapsLetter.innerHTML = ruShiftLetters[i][j];
      spanRu.append(ruCapsLetter);
      ruCapsLetter.classList.add('s-key');
      ruCapsLetter.style.display = 'none';


      if (eventCodeArr[i][j] === 'Backspace') {
        key.classList.add('backspace');
        engLetters.classList.add('backspace');
        engCapsLetter.classList.add('backspace');
        ruLetter.classList.add('backspace');
        ruCapsLetter.classList.add('backspace');
      }
      if (eventCodeArr[i][j] === 'Tab') {
        key.classList.add('tab');
        engLetters.classList.add('tab');
        engCapsLetter.classList.add('tab');
        ruLetter.classList.add('tab');
        ruCapsLetter.classList.add('tab');
      }
      if (eventCodeArr[i][j] === 'CapsLock') {
        key.classList.add('caps-lock');
        engLetters.classList.add('caps-lock');
        engCapsLetter.classList.add('caps-lock');
        ruLetter.classList.add('caps-lock');
        ruCapsLetter.classList.add('caps-lock');
      }
      if (eventCodeArr[i][j] === 'Enter') {
        key.classList.add('enter');
        engLetters.classList.add('enter');
        engCapsLetter.classList.add('enter');
        ruLetter.classList.add('enter');
        ruCapsLetter.classList.add('enter');
      }
      if (eventCodeArr[i][j] === 'ShiftLeft' || eventCodeArr[i][j] === 'ShiftRight') {
        key.classList.add('shift');
        engLetters.classList.add('shift');
        engCapsLetter.classList.add('shift');
        ruLetter.classList.add('shift');
        ruCapsLetter.classList.add('shift');
      }
      if (eventCodeArr[i][j] === 'ControlLeft' || eventCodeArr[i][j] === 'ControlRight') {
        key.classList.add('control');
        engLetters.classList.add('control');
        engCapsLetter.classList.add('control');
        ruLetter.classList.add('control');
        ruCapsLetter.classList.add('control');
      }
      if (eventCodeArr[i][j] === 'AltLeft' || eventCodeArr[i][j] === 'AltRight') {
        key.classList.add('alt');
        engLetters.classList.add('alt');
        engCapsLetter.classList.add('alt');
        ruLetter.classList.add('alt');
        ruCapsLetter.classList.add('alt');
      }
      if (eventCodeArr[i][j] === 'MetaLeft') {
        key.classList.add('meta-left');
        engLetters.classList.add('meta-left');
        engCapsLetter.classList.add('meta-left');
        ruLetter.classList.add('meta-left');
        ruCapsLetter.classList.add('meta-left');
      }
      if (eventCodeArr[i][j] === 'Space') {
        key.classList.add('space');
        engLetters.classList.add('space');
        engCapsLetter.classList.add('space');
        ruLetter.classList.add('space');
        ruCapsLetter.classList.add('space');
      }
    }
  }
  changeLanguage(getCurrentLang());
}

function keyDown(event) {
  if (codes.every((code) => code !== event.code)) {
    return false;
  }
  if (event.ctrlKey && event.altKey) {
    return changeLanguage(getNextLanguage());
  }
  if (event.key === 'CapsLock') {
    return shiftAndCapsDownAndUp(event);
  }

  if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight') {
    return event.preventDefault();
  }
  if (event.shiftKey && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    return shiftAndCapsDownAndUp(event);
  }
  const letter = document.querySelector(`.${event.code}`);
  letter.classList.add('active');
  return innerTextInTextarea(letter);
}

function keyUp(event) {
  document.querySelector(`.${event.code}`).classList.remove('active');
  if (codes.every((code) => code !== event.code)) {
    return false;
  }
  if (event.key === 'Shift') {
    return shiftAndCapsDownAndUp(event);
  }
  return false;
}

function mouseDown(event) {
  const key = event.target;
  if (key.classList.contains('caps-lock') || key.classList.contains('shift')) {
    shiftAndCapsDownAndUp(event);
  }
  if (key.classList.contains('k-key')) {
    key.classList.add('active');
  }
  innerTextInTextarea(key);
}

function mouseUp(event) {
  if (event.target.classList.contains('shift')) {
    shiftAndCapsDownAndUp(event);
  }
  if (event.target.classList.contains('k-key')) {
    event.target.classList.remove('active');
  }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
init();
