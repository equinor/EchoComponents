import { Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { themeConst } from '../..';
import { Icon } from '../../elements/icon/Icon';
import { ExpandableRowProps } from '../../types/expandableRowProps';
import { IconListItem } from '../../types/iconListItem';
import styles from './listRow.module.css';

export interface ListRowProps {
    isDraggable: boolean;
    item: IconListItem;
    expandable?: ExpandableRowProps;
    rowIndex: number;
    style?: CSSProperties;
}

/**
 * Component that renders one row in a list. The row can be marked as draggable and expandable
 *
 * @param {ListRowProps} {
 *     isDraggable: flag to indicate that the row can be rearranged in a list
 *     item: {      The item to be rendered in the row
 *          title: the title of the item in the row
 *          subtitle: the subtitle of the item in the row
 *          icons: the icons that will be displayed on the same row, and their respective actions
 *     }
 *     expandable: { object with properties to handle if the row is expandable. If undefined the row cannot be expanded
 *          iconItems: the items that will be displayed if row is expanded, and their respective actions
 *          expanded: flag to indicate if the row is expanded or not
 *          setExpanded: method that updates the expanded flag
 *     }
 *     style: style element to override wrapper style
 * }
 * @return {*}  {JSX.Element} a row element to be used in a list
 */
export const ListRow: React.FC<ListRowProps> = ({
    isDraggable,
    item,
    expandable,
    style
}: ListRowProps): JSX.Element => {
    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.row}>
                <div className={styles.infoCol}>
                    {isDraggable && (
                        <div className={styles.draggable}>
                            <Icon name="unfold_more" title="Move" color={themeConst.asBuilt}></Icon>
                        </div>
                    )}
                    <div className={styles.info}>
                        {item.title && (
                            <Typography variant="body_short" bold>
                                {item.title}
                            </Typography>
                        )}
                        {item.subTitle && <Typography variant="body_short">{item.subTitle}</Typography>}
                    </div>
                </div>
                <div className={styles.iconCol}>
                    {item.icons.map((icon, index2) => {
                        return (
                            <button
                                className={styles.iconButton}
                                key={index2}
                                onClick={(): void => {
                                    icon.onClick();
                                }}
                            >
                                <Icon name={icon.icon} title={icon.icon} color={themeConst.asBuilt}></Icon>
                            </button>
                        );
                    })}
                    {expandable && (
                        <button
                            className={expandable && expandable.expanded ? styles.activeIconButton : styles.iconButton}
                            onClick={(): void => {
                                expandable.setExpanded(true);
                            }}
                        >
                            <Icon name="more_vertical" title="Expand" color={themeConst.asBuilt}></Icon>
                        </button>
                    )}
                </div>
            </div>
            {expandable && expandable.expanded && (
                <div className={styles.expandedRow}>
                    {expandable.iconItems.map((icon, index3) => {
                        return (
                            <button
                                className={styles.iconButton}
                                key={index3}
                                onClick={(): void => {
                                    icon.onClick();
                                }}
                            >
                                <Icon name={icon.icon} title={icon.icon} color={themeConst.asBuilt}></Icon>
                            </button>
                        );
                    })}
                    <button
                        className={styles.iconButton}
                        onClick={(): void => {
                            expandable.setExpanded(false);
                        }}
                    >
                        <Icon name={'close'} title={'Close'} color={themeConst.asBuilt}></Icon>
                    </button>
                </div>
            )}
        </div>
    );
};
