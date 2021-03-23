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

export const TextIconButton: React.FC<TextIconButtonProps> = ({
    icon,
    title,
    onClick,
    style
}: TextIconButtonProps): JSX.Element => {
    return (
        <button className={styles.textIcon} onClick={onClick} style={style}>
            <Icon name={icon} title={title} color={themeConst.asBuilt} size={40}></Icon>
            <Typography color={themeConst.asBuilt}>{title}</Typography>
            <div className={styles.circle}></div>
        </button>
    );
};
