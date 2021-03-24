import { Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { themeConst } from '../../theme/themeConst';
import { Icon } from '../icon/Icon';
import styles from './textIconButton.module.css';

export interface TextIconButtonProps {
    icon: string;
    title: string;
    onClick: () => void;
    style?: CSSProperties;
}
/**
 * Component that renders a button with the icon and the text provided
 *
 * @param {TextIconButtonProps} {
 *     icon: the name of the icon to display
 *     title: the title text that the button should display
 *     onClick: the function that will be called when user clicks the button
 *     style: Optional parameter that will override the button style
 * }
 * @return {*}  {JSX.Element} A button with the provided icon and text
 */

export const TextIconButton: React.FC<TextIconButtonProps> = ({
    icon,
    title,
    onClick,
    style
}: TextIconButtonProps): JSX.Element => {
    return (
        <button className={styles.button} onClick={onClick} style={style}>
            <Icon name={icon} title={title} color={themeConst.asBuilt} size={40}></Icon>
            <Typography className={styles.text} color={themeConst.asBuilt}>
                {title}
            </Typography>
        </button>
    );
};
