'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var wizardsList = [];
var wizardsNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getWizardName = function (names, surnames) {
  return names[Math.round(Math.random() * (names.length - 1))] + ' ' + surnames[Math.round(Math.random() * (surnames.length-1))];
};

var getRandomColor = function (colors) {
  return colors[Math.round(Math.random() * colors.length)];
}

var getWizard = function () {
  var wizard = {
    name: getWizardName(wizardsNames, wizardsSurnames),
    coatColor: getRandomColor(coatColors),
    eyesColor: getRandomColor(eyesColors)
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

var wizardsList = getWizardsList();

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsList[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsList[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsList[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');

