import React, { CSSProperties } from 'react';
import { SliderField } from '../../../../src/elements/sliderField/SliderField';

export enum OptionType {
    NUMERIC = 'Numeric',
    CUSTOM = 'Custom'
}
export interface SliderFieldWrapperProps {
    value: number;
    min: number;
    max: number;
    labels?: string[];
    title: string;
    onChange: (value: number) => void;
    style?: CSSProperties;
    variant: OptionType;
}

const SliderFieldWrapper: React.FC<SliderFieldWrapperProps> = ({
    value,
    min,
    max,
    labels,
    title,
    onChange,
    style,
    variant
}: SliderFieldWrapperProps) => {
    return (
        <div className={'SliderField'}>
            <SliderField
                value={value}
                min={min}
                max={max}
                labels={variant === OptionType.CUSTOM ? labels : undefined}
                title={variant === OptionType.CUSTOM ? 'Display Size' : title}
                onChange={onChange}
                style={style}
            ></SliderField>
        </div>
    );
};

export default SliderFieldWrapper;
