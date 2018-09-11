'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
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
'Вашингтон'];
var SURNAMES = [
'да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'];
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
'green'];

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

var getWizardsList = function () {
  for (var i = 0; i < 4; i++) {
    wizardsList[i] = getWizard();
  }
  return wizardsList;
};

userDialog.classList.remove('hidden');

wizardsList = getWizardsList();

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsList[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsList[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsList[i].eyesColor;

  fragment.appendChild(wizardElement);
}

  similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
