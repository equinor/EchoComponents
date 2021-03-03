import { themeConst } from '@equinor/echo-framework';
import { Typography } from '@equinor/eds-core-react';
import React, { CSSProperties, useState } from 'react';
import { Icon } from '../../elements/icons/icon/Icon';
import styles from './iconList.module.css';

export interface IconListProps {
    style: CSSProperties;
    title: string;
    items: IconListItem[];
    isMovable: boolean;
    expanded: IconItem[];
}

export interface IconListItem {
    title: string;
    subTitle: string;
    icons: IconItem[];
}

export interface IconItem {
    icon: string;
    onClick: () => void;
}

export const IconList: React.FC<IconListProps> = ({
    style,
    title,
    items,
    isMovable,
    expanded
}: IconListProps): JSX.Element => {
    const [expandedIndex, setExpandedIndex] = useState<number>();

    return (
        <div className={styles.iconList} style={style}>
            <div className={styles.header}>
                <Typography group="table" variant="cell_text" bold>
                    {title}
                </Typography>
            </div>
            <div className={styles.items}>
                {items.map((item, index) => {
                    return (
                        <div className={styles.item} key={index}>
                            <div className={styles.row1}>
                                <div className={styles.col1}>
                                    {isMovable && (
                                        <div className={styles.moveable}>
                                            <Icon name="unfold_more" title="Move" color={themeConst.asBuilt}></Icon>
                                        </div>
                                    )}
                                    <div className={styles.info}>
                                        <Typography variant="body_short" bold>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body_short">{item.subTitle}</Typography>
                                    </div>
                                </div>
                                <div className={styles.col2}>
                                    {item.icons.map((icon, index2) => {
                                        return (
                                            <div
                                                className={styles.iconWrapper}
                                                key={index2}
                                                onClick={(): void => {
                                                    icon.onClick();
                                                }}
                                            >
                                                <Icon
                                                    name={icon.icon}
                                                    title={icon.icon}
                                                    color={themeConst.asBuilt}
                                                ></Icon>
                                            </div>
                                        );
                                    })}
                                    {expanded && (
                                        <div
                                            className={styles.expandable}
                                            onClick={(): void => {
                                                setExpandedIndex(index);
                                            }}
                                        >
                                            <Icon name="more_vertical" title="Expand" color={themeConst.asBuilt}></Icon>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {expandedIndex === index && (
                                <div className={styles.row2}>
                                    {expanded.map((icon, index3) => {
                                        return (
                                            <div
                                                className={styles.iconWrapper}
                                                key={index3}
                                                onClick={(): void => {
                                                    icon.onClick();
                                                }}
                                            >
                                                <Icon
                                                    name={icon.icon}
                                                    title={icon.icon}
                                                    color={themeConst.asBuilt}
                                                ></Icon>
                                            </div>
                                        );
                                    })}
                                    <div
                                        className={styles.close}
                                        onClick={(): void => {
                                            setExpandedIndex(undefined);
                                        }}
                                    >
                                        <Icon name={'close'} title={'Close'} color={themeConst.asBuilt}></Icon>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
