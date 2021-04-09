import { Slider, Typography } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import styles from './sliderField.module.css';

export interface SliderFieldProps {
    value: number;
    min: number;
    max: number;
    title: string;
    onChange: (value: number) => void;
    style?: CSSProperties;
}

export const SliderField: React.FC<SliderFieldProps> = ({
    value,
    min,
    max,
    title,
    onChange,
    style
}: SliderFieldProps): JSX.Element => {
    return (
        <div className={styles.sliderField} style={style}>
            <Typography variant="body_short">{title}</Typography>
            <div className={styles.sliderWrapper}>
                <Slider
                    value={value}
                    min={min}
                    max={max}
                    ariaLabelledby={title}
                    onChange={(e: React.FormEvent<HTMLDivElement>, newValue: number | number[]): void => {
                        onChange(newValue as number);
                    }}
                />
            </div>
        </div>
    );
};
