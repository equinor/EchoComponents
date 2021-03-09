import { themeConst } from '@equinor/echo-framework';
import { Typography } from '@equinor/eds-core-react';
import cx from 'classnames';
import React, { CSSProperties } from 'react';
import { DraggableHandleSelector } from '../../../elements/functional/draggableOrder/DraggableOrder';
import { Icon } from '../../../elements/icons/icon/Icon';
import styles from './listRow.module.css';

export interface ListRowProps {
    isMovable: boolean;
    item: IconListItem;
    expandedIcons: IconItem[];
    expanded?: boolean;
    rowIndex: number;
    onExpand?: (status: boolean) => void;
    style?: CSSProperties;
}

export interface IconListItem {
    title?: string;
    subTitle?: string;
    icons: IconItem[];
}

export interface IconItem {
    icon: string;
    onClick: () => void;
}

export const ListRow: React.FC<ListRowProps> = ({
    isMovable,
    item,
    expandedIcons,
    expanded,
    onExpand,
    style
}: ListRowProps): JSX.Element => {
    return (
        <div className={styles.listRow} style={style}>
            <div className={styles.row1}>
                <div className={styles.col1}>
                    {isMovable && (
                        <div className={cx(styles.moveable, DraggableHandleSelector)}>
                            <Icon name="unfold_more" title="Move" color={themeConst.asBuilt}></Icon>
                        </div>
                    )}
                    <div className={cx(styles.info, isMovable ? '' : styles.infoMargin)}>
                        {item.title && (
                            <Typography variant="body_short" bold>
                                {item.title}
                            </Typography>
                        )}
                        {item.subTitle && <Typography variant="body_short">{item.subTitle}</Typography>}
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
                                tabIndex={0}
                            >
                                <Icon name={icon.icon} title={icon.icon} color={themeConst.asBuilt}></Icon>
                            </div>
                        );
                    })}
                    {expandedIcons && (
                        <div
                            className={styles.expandable}
                            onClick={(): void => {
                                if (onExpand) {
                                    onExpand(true);
                                }
                            }}
                            tabIndex={0}
                        >
                            <Icon name="more_vertical" title="Expand" color={themeConst.asBuilt}></Icon>
                        </div>
                    )}
                </div>
            </div>
            {expanded && (
                <div className={styles.row2}>
                    {expandedIcons.map((icon, index3) => {
                        return (
                            <div
                                className={styles.iconWrapper}
                                key={index3}
                                onClick={(): void => {
                                    icon.onClick();
                                }}
                                tabIndex={0}
                            >
                                <Icon name={icon.icon} title={icon.icon} color={themeConst.asBuilt}></Icon>
                            </div>
                        );
                    })}
                    <div
                        className={styles.close}
                        onClick={(): void => {
                            if (onExpand) {
                                onExpand(false);
                            }
                        }}
                        tabIndex={0}
                    >
                        <Icon name={'close'} title={'Close'} color={themeConst.asBuilt}></Icon>
                    </div>
                </div>
            )}
        </div>
    );
};
