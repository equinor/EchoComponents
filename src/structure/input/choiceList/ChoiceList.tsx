import { Radio, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './choiceList.module.css';

export interface ChoiceListProps {
    style: CSSProperties;
    items: ChoiceItem[];
    titles: string[];
    columns: number;
}

export interface ChoiceItem {
    color?: string;
    title: string;
    selectedColumnIndex: number;
    onSelected: (rowIndex: number, columnIndex: number) => void;
}

export const ChoiceList: React.FC<ChoiceListProps> = ({
    items,
    style,
    titles,
    columns
}: ChoiceListProps): JSX.Element => {
    return (
        <div className={styles.choiceList} style={style}>
            <div className={styles.head}>
                {titles.map((title, index) => {
                    if (index === 0) {
                        return (
                            <Typography className={styles.title} key={index} group="table" variant="cell_text" bold>
                                {title}
                            </Typography>
                        );
                    }
                    return (
                        <Typography group="table" variant="cell_text" bold className={styles.columnTitle} key={index}>
                            {title}
                        </Typography>
                    );
                })}
            </div>
            <div className={styles.body}>
                {items.map((item, rowIndex) => {
                    return (
                        <div className={styles.item} key={rowIndex}>
                            <div className={styles.title}>
                                {item.color && (
                                    <div className={styles.circle} style={{ backgroundColor: item.color }}></div>
                                )}
                                <Typography group="table" variant="cell_text">
                                    {item.title}
                                </Typography>
                            </div>
                            {[...Array(columns)].map((column, columnIndex) => {
                                return (
                                    <div className={styles.radio} key={columnIndex}>
                                        <Radio
                                            label=""
                                            checked={item.selectedColumnIndex === columnIndex}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                                if (event.target.value) item.onSelected(rowIndex, columnIndex);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
