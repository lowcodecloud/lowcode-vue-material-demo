import * as React from 'react';
import './index.scss';
export interface ColorfulButtonProps {
    /**
     * 类型
     */
    type?: "primary" | "secondary" | "normal";
    color?: 'string';
    style?: 'object';
}
declare const ColorfulButton: React.FC<ColorfulButtonProps>;
export default ColorfulButton;
