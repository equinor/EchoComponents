import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ChoiceFieldProps } from '../../../../../src/elements/fields/choiceField/ChoiceField';
import ChoiceFieldWrapper from './ChoiceFieldWrapper';

export default {
    title: 'ChoiceField',

    component: ChoiceFieldWrapper,
    argTypes: {}
} as Meta;

const Template: Story<ChoiceFieldProps> = (args) => <ChoiceFieldWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: 'Rotation direction',
    choices: [
        {
            title: 'Standard',
            value: true
        },
        {
            title: 'Inverted',
            value: false
        }
    ],
    style: { width: '350px' },
    onSelected: (index: number) => {
        console.log('Selected', index);
    }
};
