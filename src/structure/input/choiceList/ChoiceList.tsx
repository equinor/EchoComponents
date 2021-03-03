import { Radio, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './choiceList.module.css';

export interface ChoiceListProps {
    style: CSSProperties;
    items: ChoiceItem[];
    titles: string[];
}

export interface ChoiceItem {
    color?: string;
    title: string;
    selected: 'hide' | 'transparent' | 'show';
    onSelected: (index: number, selected: ChoiceSelected) => void;
}

export enum ChoiceSelected {
    hide = 'hide',
    transparent = 'transparent',
    show = 'show'
}

/**
 * Component that renders a discipline list with a control of visibility
 * The minimal width is 320px, UX source is 352px
 *
 * @param {ChoiceListProps} {
 *     style: sets the style of the component
 *     items: array of items to be rendered and controlled (color: circle color, title: shown title, selected: visibility variant, onSelected: callback function on new selection)
 * }
 * @return {*}  {JSX.Element} a controlled discipline list
 */
export const ChoiceList: React.FC<ChoiceListProps> = ({ items, style, titles }: ChoiceListProps): JSX.Element => {
    return (
        <div className={styles.choiceList} style={style}>
            <div className={styles.head}>
                <span className={styles.title}>
                    <Typography group="table" variant="cell_text" bold>
                        {titles[0]}
                    </Typography>
                </span>
                <span className={styles.radio}>
                    <Typography group="table" variant="cell_text" bold>
                        {titles[1]}
                    </Typography>
                </span>
                <span className={styles.radio}>
                    <Typography group="table" variant="cell_text" bold>
                        {titles[2]}
                    </Typography>
                </span>
                <span className={styles.radio}>
                    <Typography group="table" variant="cell_text" bold>
                        {titles[3]}
                    </Typography>
                </span>
            </div>
            <div className={styles.body}>
                {items.map((item, index) => {
                    return (
                        <div className={styles.item} key={index}>
                            <div className={styles.title}>
                                {item.color && (
                                    <div className={styles.circle} style={{ backgroundColor: item.color }}></div>
                                )}
                                <Typography group="table" variant="cell_text">
                                    {item.title}
                                </Typography>
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    label=""
                                    checked={item.selected === ChoiceSelected.hide}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                        if (event.target.value) item.onSelected(index, ChoiceSelected.hide);
                                    }}
                                />
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    label=""
                                    checked={item.selected === ChoiceSelected.transparent}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                        if (event.target.value) item.onSelected(index, ChoiceSelected.transparent);
                                    }}
                                />
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    label=""
                                    checked={item.selected === ChoiceSelected.show}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                        if (event.target.value) item.onSelected(index, ChoiceSelected.show);
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
