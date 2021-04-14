import { Slider, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './sliderField.module.css';

export interface SliderFieldProps {
    value: number;
    min: number;
    max: number;
    labels?: string[];
    title: string;
    onChange: (value: number) => void;
    style?: CSSProperties;
}
/**
 * Component that renders a slider with numeric or custom values
 *
 * @param {SliderFieldProps} {
 *     value: Current value of the slider,
 *     min: Minimum value of the slider,
 *     max: Maximum value of the slider,
 *     labels: List of labels to use if the slider should not display numeric values,
 *     title: Text shown as title of the slider,
 *     onChange: Method that will be called if the slider value is changed,
 *     style: style element to override wrapper style
 * }
 * @return {*}  {JSX.Element}
 */
export const SliderField: React.FC<SliderFieldProps> = ({
    value,
    min,
    max,
    labels,
    title,
    onChange,
    style
}: SliderFieldProps): JSX.Element => {
    const outputFunctionForLabels = (currentValue: number, labelsAsParam: string[]): string => {
        return labelsAsParam[currentValue];
    };

    return (
        <div className={styles.sliderField} style={style}>
            <Typography variant="body_short">{title}</Typography>
            <div className={styles.sliderWrapper}>
                {!labels || (labels && labels.length === 0) ? (
                    <Slider
                        value={value}
                        min={min}
                        max={max}
                        ariaLabelledby={title}
                        onChange={(e: React.FormEvent<HTMLDivElement>, newValue: number | number[]): void => {
                            onChange(newValue as number);
                        }}
                    />
                ) : (
                    <Slider
                        value={value}
                        min={0}
                        max={labels.length - 1}
                        ariaLabelledby={title}
                        outputFunction={(currentNr: number): string => outputFunctionForLabels(currentNr, labels)}
                        onChange={(e: React.FormEvent<HTMLDivElement>, newValue: number | number[]): void => {
                            onChange(newValue as number);
                        }}
                    />
                )}
            </div>
        </div>
    );
};
