"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomColor = exports.generateCaptcha = void 0;
var generateCaptcha = exports.generateCaptcha = function generateCaptcha() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var charsArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0123456789abcdefghijklmnopqrstuvwxyz";
  var captcha = [];
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * charsArray.length);
    captcha.push(charsArray[index]);
  }
  return captcha.join("");
};
var getRandomColor = exports.getRandomColor = function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};