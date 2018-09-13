'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup')
var setupClose = setup.querySelector('.setup-close');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var setupName = setup.querySelector('.setup-user-name');
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var wizardsList = [];
var NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomItem = function (items) {
  return items[Math.round(Math.random() * (items.length - 1))];
};

var getWizardName = function (names, surnames) {
  return getRandomItem(names) + ' ' + getRandomItem(surnames);
};

var getWizard = function () {
  var wizard = {
    name: getWizardName(NAMES, SURNAMES),
    coatColor: getRandomItem(COAT_COLORS),
    eyesColor: getRandomItem(EYES_COLORS)
  };
  return wizard;
};

var getWizardsList = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    wizardsList[i] = getWizard();
  }
  return wizardsList;
};

var renderWizardItem = function (item) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = item.name;
  wizardElement.querySelector('.wizard-coat').style.fill = item.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = item.eyesColor;
  return wizardElement;
};

var appendWizardElements = function (list) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < list.length; i++) {
    fragment.appendChild(renderWizardItem(list[i]));
  }
  similarListElement.appendChild(fragment);
};

appendWizardElements(getWizardsList(4));

document.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onPopupEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};

var closePopup = function () {
  setup.classList.add('hidden');
};

var openPopup = function () {
  setup.classList.remove('hidden');

  setupClose.addEventListener('click', closePopup);
  setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode == ENTER_KEYCODE) {
      closePopup();
    }
  });
  document.addEventListener('keydown', onPopupEscPress);

  setupName.addEventListener('focus', function() {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  setupName.addEventListener('blur', function() {
    document.addEventListener('keydown', onPopupEscPress);
  });
};

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', onPopupEnterPress);

wizardCoat.addEventListener('click', function() {
  var randomCoatColor = getRandomItem(COAT_COLORS)
  wizardCoat.style.fill = randomCoatColor;
  document.querySelector('input[name = coat-color]').value = randomCoatColor;
});

wizardEyes.addEventListener('click', function() {
  var randomEyesColor = getRandomItem(EYES_COLORS);
  wizardEyes.style.fill = randomEyesColor;
  document.querySelector('input[name = eyes-color]').value = randomEyesColor;
});

fireball.addEventListener('click', function() {
  var randomFireballColor = getRandomItem(FIREBALL_COLORS);
  fireball.style.background = randomFireballColor;
  document.querySelector('input[name = fireball-color]').value = randomFireballColor;
});
