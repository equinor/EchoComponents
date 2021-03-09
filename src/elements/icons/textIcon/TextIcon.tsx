import { Typography } from '@equinor/eds-core-react';
import cx from 'classnames';
import React, { CSSProperties } from 'react';
import { Icon } from '../icon/Icon';
import styles from './textIcon.module.css';

export interface TextIconProps {
    icon: string;
    title: string;
    onClick: () => void;
    active?: boolean;
    style?: CSSProperties;
}

export const TextIcon: React.FC<TextIconProps> = ({
    icon,
    title,
    onClick,
    active,
    style
}: TextIconProps): JSX.Element => {
    return (
        <div className={cx(styles.textIcon, active ? styles.active : '')} onClick={onClick} style={style} tabIndex={0}>
            <Icon name={icon} title={title} color="#007079"></Icon>
            <Typography color="primary">{title}</Typography>
            <div className={styles.circle}></div>
        </div>
    );
};
