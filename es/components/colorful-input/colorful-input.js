import _Input from "@alifd/next/es/input";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "style"];
import * as React from 'react';
import "./index.scss";

var ColorfulInput = function ColorfulInput(_ref) {
  var color = _ref.color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _style = style || {};

  if (color) {
    _style.backgroundColor = color;
  }

  var _otherProps = otherProps || {};

  _otherProps.style = _style;
  return /*#__PURE__*/React.createElement(_Input, _otherProps);
};

export default ColorfulInput;