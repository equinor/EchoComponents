import { Radio, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './disciplineListControl.module.css';

export interface DisciplineListControlProps {
    widthStyle: CSSProperties;
    disciplines: Discipline[];
}

export interface Discipline {
    color: string;
    title: string;
    selected: 'hide' | 'transparent' | 'show';
    onSelected: (selected: DisciplineSelected) => void;
}

export enum DisciplineSelected {
    hide = 'hide',
    transparent = 'transparent',
    show = 'show'
}

/**
 * Component that renders a discipline list with a control of visibility
 * The minimal width is 320px, UX source is 352px
 *
 * @param {DisciplineListControlProps} {
 *     widthStyle: sets the width of the component
 *     disciplines: array of disciplines to be rendered and controlled (color: circle color, title: shown title, selected: visibility variant, onSelected: callback function on new selection)
 * }
 * @return {*}  {JSX.Element} a controlled discipline list
 */
export const DisciplineListControl: React.FC<DisciplineListControlProps> = ({
    disciplines,
    widthStyle
}: DisciplineListControlProps): JSX.Element => {
    return (
        <div className={styles.disciplineListControl} style={widthStyle}>
            <div className={styles.head}>
                <span className={styles.title}>
                    <Typography group="table" variant="cell_text" bold>
                        Disciplines
                    </Typography>
                </span>
                <span className={styles.radio}>
                    <Typography group="table" variant="cell_text" bold>
                        Hide
                    </Typography>
                </span>
                <span className={styles.radio}>
                    <Typography group="table" variant="cell_text" bold>
                        Transp.
                    </Typography>
                </span>
                <span className={styles.radio}>
                    <Typography group="table" variant="cell_text" bold>
                        Show
                    </Typography>
                </span>
            </div>
            <div className={styles.body}>
                {disciplines.map((discipline, index) => {
                    return (
                        <div className={styles.item} key={index}>
                            <div className={styles.title}>
                                <div className={styles.circle} style={{ backgroundColor: discipline.color }}></div>
                                <Typography group="table" variant="cell_text">
                                    {discipline.title}
                                </Typography>
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    label=""
                                    checked={discipline.selected === DisciplineSelected.hide}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                        if (event.target.value) discipline.onSelected(DisciplineSelected.hide);
                                    }}
                                />
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    label=""
                                    checked={discipline.selected === DisciplineSelected.transparent}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                        if (event.target.value) discipline.onSelected(DisciplineSelected.transparent);
                                    }}
                                />
                            </div>
                            <div className={styles.radio}>
                                <Radio
                                    label=""
                                    checked={discipline.selected === DisciplineSelected.show}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                        if (event.target.value) discipline.onSelected(DisciplineSelected.show);
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
