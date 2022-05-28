import * as React from 'react';
// @ts-ignore
import { createElement } from 'react';
import 'element-ui/lib/theme-chalk/index.css'
import { Button } from 'element-ui';

import { VueContainer } from 'vuereact-combined'

import './index.scss';

export interface ColorfulButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "success" | "warning";
  color?: 'string';
  style?: 'object'
}

const ColorfulButton: React.FC<ColorfulButtonProps> = function ColorfulButton({
  type = 'primary',
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
  return (
    <VueContainer component={Button} type={type} { ..._otherProps } >element-ui button</VueContainer>
  );
};

ColorfulButton.displayName = 'ColorfulButton';
export default ColorfulButton;


