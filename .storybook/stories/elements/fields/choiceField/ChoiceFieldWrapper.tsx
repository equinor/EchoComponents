import React from 'react';
import { ChoiceField, ChoiceFieldProps } from '../../../../../src/elements/fields/choiceField/ChoiceField';

const SliderFieldWrapper: React.FC<ChoiceFieldProps> = ({ title, choices, style, onSelected }: ChoiceFieldProps) => {
    return (
        <div className={'ChoiceField'}>
            <ChoiceField title={title} choices={choices} style={style} onSelected={onSelected}></ChoiceField>
        </div>
    );
};

export default SliderFieldWrapper;
