"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = exports.Button = exports.Recover = exports.Check = exports.Form = exports.LoginSection = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _decoration = _interopRequireDefault(require("../img/decoration.svg"));

var _decorationTwo = _interopRequireDefault(require("../img/decorationTwo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.5s;\n  margin-top: 5px;\n  color: red;\n  font-family: Source Sans Pro;\n  font-weight: 400;\n  font-style: normal;\n  letter-spacing: 0.8px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  border-radius: 22px;\n  opacity: 1;\n  width: 330px;\n  height: 39px;\n  cursor: pointer;\n  background-color: #558b2f;\n  border: none;\n  font-family: Source Sans Pro;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.64px;\n  text-transform: capitalize;\n  color: #ffffff;\n  opacity: 1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 6px;\n  letter-spacing: 0px;\n  color: #558b2f;\n  font-weight: normal;\n  font-family: Roboto;\n  font-size: 16px;\n  text-decoration: underline #558b2f;\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  margin-right: 220px;\n  opacity: 1;\n\n  input[type=\"checkbox\"] {\n    width: 25px;\n    height: 25px;\n    border-radius: 35%;\n    border: 1px solid #595f6e;\n    appearance: none;\n    outline: none;\n    cursor: pointer;\n  }\n\n  input[type=\"checkbox\"]:checked {\n    background-color: #558b2f;\n  }\n\n  p {\n    text-align: left;\n    font-size: 17px;\n    font-family: Roboto;\n    color: #4d4f5c;\n    margin-left: 8px;\n    opacity: 1;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n\n  h1 {\n    width: 461px;\n    height: 46px;\n    margin-top: 78.57px;\n    font-family: Source Sans Pro;\n    font-weight: 400;\n    font-style: normal;\n    letter-spacing: 0.8px;\n    font-size: 20px;\n    color: #595f6e;\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  background-image: url(", "), url(", ");\n  background-position: top left, bottom right;\n  background-repeat: no-repeat;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _decoration["default"], _decorationTwo["default"]);

exports.Container = Container;

var LoginSection = _styledComponents["default"].div(_templateObject2());

exports.LoginSection = LoginSection;

var Form = _styledComponents["default"].form(_templateObject3());

exports.Form = Form;

var Check = _styledComponents["default"].div(_templateObject4());

exports.Check = Check;

var Recover = _styledComponents["default"].div(_templateObject5());

exports.Recover = Recover;

var Button = _styledComponents["default"].button(_templateObject6());

exports.Button = Button;

var ErrorMessage = _styledComponents["default"].p(_templateObject7());

exports.ErrorMessage = ErrorMessage;