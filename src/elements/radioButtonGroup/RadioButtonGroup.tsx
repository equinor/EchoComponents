import { Radio, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { RadioButtonItem } from '../../types/radioButtonItem';
import styles from './radioButton.module.css';

export interface RadioButtonGroupProps {
    title: string;
    options: RadioButtonItem[];
    style?: CSSProperties;
    onSelected: (index: number) => void;
}
/**
 * Component that renders a Radio Button Group with a set of options to choose from
 *
 * @param {RadioButtonGroupProps} {
 *     title: The title of the radio button group,
 *     options: List of items to be displayed as options,
 *     style: Style element to override wrapper style,
 *     onSelected: Method to be called when the selected value is changed
 * }
 * @return {*}  {JSX.Element}
 */
export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
    title,
    options,
    style,
    onSelected
}: RadioButtonGroupProps): JSX.Element => {
    return (
        <div style={style}>
            <Typography variant="body_short" className={styles.header}>
                {title}
            </Typography>
            <div className={styles.buttonWrapper}>
                {options.map((option, index) => {
                    return (
                        <Radio
                            key={index}
                            label={option.title}
                            checked={option.isChecked}
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
