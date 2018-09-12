'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
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

var getWizardsList = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    wizardsList[i] = getWizard();
  }
  return wizardsList;
};

userDialog.classList.remove('hidden');

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
