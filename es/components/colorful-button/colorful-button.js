import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["type", "color", "style"];
import * as React from 'react';
import * as EL from 'element-ui';
import { VueContainer } from 'vuereact-combined';
import "./index.scss";

var ColorfulButton = function ColorfulButton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      color = _ref.color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _style = style || {};

  if (color) {
    _style.backgroundColor = color;
  }

  var _otherProps = otherProps || {};

  _otherProps.style = _style;
  return /*#__PURE__*/React.createElement(VueContainer, _extends({
    component: EL.Button,
    type: type
  }, _otherProps), "element-ui button");
};

ColorfulButton.displayName = 'ColorfulButton';
export default ColorfulButton;