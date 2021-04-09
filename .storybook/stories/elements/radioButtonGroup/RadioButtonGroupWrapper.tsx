import React, { CSSProperties, useEffect, useState } from 'react';
import { RadioButtonGroup } from '../../../../src/elements/radioButtonGroup/RadioButtonGroup';
import { RadioButtonItem } from '../../../../src/types/radioButtonItem';

export interface RadioButtonGroupWrapperProps {
    title: string;
    options: RadioButtonItem[];
    style?: CSSProperties;
}

const RadioButtonGroupWrapper: React.FC<RadioButtonGroupWrapperProps> = ({
    title,
    options,
    style
}: RadioButtonGroupWrapperProps) => {
    const [optionsToUse, setOptionsToUse] = useState<RadioButtonItem[]>(options);

    useEffect(() => {
        setOptionsToUse(options);
    }, [options]);

    const onSelected = (index: number) => {
        console.log('Index with number ', index, ' was selected.');
        const updatedChoices = optionsToUse.map((c, i) => {
            if (i === index) {
                c.isChecked = true;
                return c;
            }
            c.isChecked = false;
            return c;
        });
        setOptionsToUse(updatedChoices);
    };

    return (
        <div className={'RadioButtonGroup'}>
            <RadioButtonGroup
                title={title}
                options={optionsToUse}
                style={style}
                onSelected={onSelected}
            ></RadioButtonGroup>
        </div>
    );
};

export default RadioButtonGroupWrapper;
