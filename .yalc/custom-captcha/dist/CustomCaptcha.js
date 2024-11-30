"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Helper = require("./utils/Helper");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var CustomCaptcha = function CustomCaptcha(_ref) {
  var captcha = _ref.captcha,
    onReload = _ref.onReload,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? "#f2f2f2" : _ref$backgroundColor,
    _ref$font = _ref.font,
    font = _ref$font === void 0 ? "bold 30px Arial" : _ref$font,
    _ref$noiseLines = _ref.noiseLines,
    noiseLines = _ref$noiseLines === void 0 ? 6 : _ref$noiseLines,
    _ref$buttonColor = _ref.buttonColor,
    buttonColor = _ref$buttonColor === void 0 ? "#111" : _ref$buttonColor,
    _ref$buttonTxtColor = _ref.buttonTxtColor,
    buttonTxtColor = _ref$buttonTxtColor === void 0 ? "#fff" : _ref$buttonTxtColor,
    _ref$buttonWidth = _ref.buttonWidth,
    buttonWidth = _ref$buttonWidth === void 0 ? "42px" : _ref$buttonWidth,
    _ref$buttonContent = _ref.buttonContent,
    buttonContent = _ref$buttonContent === void 0 ? "&#x21bb;" : _ref$buttonContent,
    _ref$inputHeight = _ref.inputHeight,
    inputHeight = _ref$inputHeight === void 0 ? "50px" : _ref$inputHeight;
  var canvasRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = 200; // Fixed width for better control
    canvas.height = 50;

    // Draw background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw each character of the CAPTCHA text with a different color
    ctx.font = font;
    for (var i = 0; i < captcha.length; i++) {
      ctx.fillStyle = (0, _Helper.getRandomColor)();
      ctx.fillText(captcha[i], 10 + i * 30, 35); // Adjusted spacing for better readability
    }

    // Add some noise
    ctx.strokeStyle = "#000";
    for (var _i = 0; _i < noiseLines; _i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
  }, [captcha, backgroundColor, font, noiseLines]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex"
    },
    className: "canvasBox"
  }, /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    style: {
      pointerEvents: "none",
      height: inputHeight,
      borderRadius: "4px 0 0 4px",
      border: "1px solid var(--border-color, #ccc)",
      width: "calc(100% - 38px)"
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: onReload,
    className: "btn btn-sm",
    style: {
      backgroundColor: buttonColor,
      width: buttonWidth,
      height: inputHeight,
      color: buttonTxtColor,
      marginTop: "0",
      "float": "right",
      zIndex: "9",
      borderRadius: "0 4px 4px 0",
      position: "relative",
      fontSize: "22px"
    },
    "aria-label": "Reload Captcha"
  }, buttonContent, " "));
};
var _default = exports["default"] = CustomCaptcha;