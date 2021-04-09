import { Radio, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { RadioButtonItem } from '../../types/radioButtonItem';
import styles from './radioButton.module.css';

export interface RadioButtonGroupProps {
    title: string;
    choices: RadioButtonItem[];
    style?: CSSProperties;
    onSelected: (index: number) => void;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
    title,
    choices,
    style,
    onSelected
}: RadioButtonGroupProps): JSX.Element => {
    return (
        <div style={style}>
            <Typography variant="body_short" className={styles.header}>
                {title}
            </Typography>
            <div className={styles.buttonWrapper}>
                {choices.map((choice, index) => {
                    return (
                        <Radio
                            key={index}
                            label={choice.title}
                            checked={choice.isChecked}
                            onChange={(): void => {
                                onSelected(index);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};
