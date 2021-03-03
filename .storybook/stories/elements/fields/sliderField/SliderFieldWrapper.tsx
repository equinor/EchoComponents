import React from 'react';
import { SliderField, SliderFieldProps } from '../../../../../src/elements/fields/sliderField/SliderField';

const SliderFieldWrapper: React.FC<SliderFieldProps> = ({
    value,
    min,
    max,
    title,
    onChange,
    style
}: SliderFieldProps) => {
    return (
        <div className={'SliderField'}>
            <SliderField
                value={value}
                min={min}
                max={max}
                title={title}
                onChange={onChange}
                style={style}
            ></SliderField>
        </div>
    );
};

export default SliderFieldWrapper;
