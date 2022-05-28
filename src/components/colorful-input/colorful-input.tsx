import * as React from 'react';
// @ts-ignore
import { createElement } from 'react';
import 'element-ui/lib/theme-chalk/index.css'
import { Input } from 'element-ui';

import { VueContainer } from 'vuereact-combined'
import './index.scss';



export interface ColorfulInputProps {
  color?: 'string';
  style?: 'object'
}

const ColorfulInput: React.FC<ColorfulInputProps> = function ColorfulInput({
  color,
  style = {},
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    // @ts-ignore
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  // @ts-ignore
  _otherProps.style = _style;
  return (
    <VueContainer component={Input} { ..._otherProps } />
  );
};

export default ColorfulInput;
