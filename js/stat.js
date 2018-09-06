'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var GAP_X = 25;
var GAP_Y = 60;
var SHADOW_GAP = 10;
var FONT_GAP = 10;
var TEXT_GAP = 200;
var BAR_WIDHTH = 40;
var MAX_BAR_HEIGHT = 150;
var BAR_GAP = 50;
var CLOUD_PADDING = 10;
var xTitle = CLOUD_X + CLOUD_PADDING;
var yTitle1 = CLOUD_Y + CLOUD_PADDING + FONT_GAP;
var yTitle2 = yTitle1 + FONT_GAP;

var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

window.renderStatistics = function (ctx, players, times) {
  var xColumnCoordinate;
  var yColumnCoordinate;
  var barHeight;
  var maxElement = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', xTitle, yTitle1);
  ctx.fillText('Список результатов:', xTitle, yTitle2);

  for (var i = 0; i < players.length; i++) {

    xColumnCoordinate = CLOUD_X + GAP_X + i * (BAR_WIDHTH + BAR_GAP);
    yColumnCoordinate = CLOUD_Y + GAP_Y + TEXT_GAP;
    barHeight = MAX_BAR_HEIGHT * times[i] / maxElement;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], xColumnCoordinate, yColumnCoordinate);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomBlue = Math.random().toFixed(1);
      ctx.fillStyle = 'rgba(16, 46, 196,' + randomBlue + ' )';
    }

    ctx.fillRect(xColumnCoordinate, (CLOUD_Y + GAP_Y) + (MAX_BAR_HEIGHT - barHeight), BAR_WIDHTH, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), xColumnCoordinate, CLOUD_Y + GAP_Y + (MAX_BAR_HEIGHT - barHeight) - FONT_GAP);
  }
};
