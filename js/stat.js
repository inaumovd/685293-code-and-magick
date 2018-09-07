'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var SHADOW_GAP = 10;
var BAR_WIDHTH = 40;
var MAX_BAR_HEIGHT = 150;
var CLOUD_PADDING = 20;
var Y_BASELINE = 100;
var BAR_GAP = 90;
var TITLE_GAP = 20;
var TEXT_GAP = 170;
var SCORE_GAP = 5;

var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

var renderCloud = function (ctx, x, y, color) { // рисует облако
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var renderTitle = function (ctx) {
  var xTitle = CLOUD_X + CLOUD_PADDING;
  var yTitle1 = CLOUD_Y + CLOUD_PADDING;
  var yTitle2 = yTitle1 + TITLE_GAP;

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', xTitle, yTitle1);
  ctx.fillText('Список результатов:', xTitle, yTitle2);
};

window.renderStatistics = function (ctx, players, times) {

  var maxElement = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx);

  for (var i = 0; i < players.length; i++) {

    var currentBarHeight = MAX_BAR_HEIGHT * times[i] / maxElement;

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomBlue = Math.random().toFixed(1);
      ctx.fillStyle = 'rgba(16, 46, 196,' + randomBlue + ' )';
    }
    ctx.fillRect(CLOUD_X + CLOUD_PADDING + i * BAR_GAP, Y_BASELINE + (MAX_BAR_HEIGHT - currentBarHeight), BAR_WIDHTH, currentBarHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + CLOUD_PADDING + i * BAR_GAP, Y_BASELINE + TEXT_GAP);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + CLOUD_PADDING + i * BAR_GAP, Y_BASELINE + (MAX_BAR_HEIGHT - currentBarHeight) - SCORE_GAP);
  }
};
