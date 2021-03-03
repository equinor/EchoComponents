import { Radio, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './choiceField.module.css';

export interface ChoiceFieldProps {
    title: string;
    choices: ChoiceFieldItem[];
    style?: CSSProperties;
    onSelected: (index: number) => void;
}

export interface ChoiceFieldItem {
    title: string;
    value: boolean;
}

export const ChoiceField: React.FC<ChoiceFieldProps> = ({
    title,
    choices,
    style,
    onSelected
}: ChoiceFieldProps): JSX.Element => {
    return (
        <div className={styles.choiceField} style={style}>
            <Typography variant="body_short">{title}</Typography>
            <div className={styles.options}>
                {choices.map((choice, index) => {
                    return (
                        <div className={styles.choice} key={index}>
                            <Radio
                                label={choice.title}
                                checked={choice.value}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                                    if (event.target.value) onSelected(index);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
