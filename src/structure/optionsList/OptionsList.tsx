import { Radio, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { OptionsItem } from '../../types/optionsItem';
import styles from './optionsList.module.css';

export interface OptionsListProps {
    style?: CSSProperties;
    items: OptionsItem[];
    titles: string[];
    columns: number;
}

/**
 *  Component that renders a list with a set number of radio buttons for each row in the list
 *
 * @param {OptionsListProps} {
 *     items:{ the items that should be shown in the list
 *          title: the text displayed for a row in the list
 *          color: the background color used in the badge in front of the title of the item
 *          selectedColumnIndex: specifies witch radio button should have selected state. Should not be larger than the columns input property
 *     }
 *     style: Optional parameter that can override the wrapper style
 *     titles: list of title that should be shown for the different columns in the list
 *     columns: the number of columns the list should have
 * }
 * @return {*}  {JSX.Element} a list of rows with a set of radio buttons
 */
export const OptionsList: React.FC<OptionsListProps> = ({
    items,
    style,
    titles,
    columns
}: OptionsListProps): JSX.Element => {
    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.head}>
                {titles.map((title, index) => {
                    return (
                        <Typography group="table" variant="cell_text" bold className={styles.columnTitle} key={index}>
                            {title}
                        </Typography>
                    );
                })}
            </div>
            {items.map((item, rowIndex) => {
                return (
                    <div className={styles.row} key={rowIndex}>
                        <div className={styles.item}>
                            {item.color && (
                                <div className={styles.circle} style={{ backgroundColor: item.color }}></div>
                            )}
                            <Typography className={styles.itemTitle}>{item.title}</Typography>
                        </div>

                        {[...Array(columns)].map((_, columnIndex) => {
                            return (
                                <Radio
                                    title={item.title}
                                    className={styles.radio}
                                    key={columnIndex}
                                    label={''}
                                    checked={item.selectedColumnIndex === columnIndex}
                                    onChange={(): void => {
                                        item.onSelected(rowIndex, columnIndex);
                                    }}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
