import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import RadioButtonGroupWrapper, { RadioButtonGroupWrapperProps } from './RadioButtonGroupWrapper';

export default {
    title: 'Elements/Functional/RadioButtonGroup',

    component: RadioButtonGroupWrapper,
    argTypes: {}
} as Meta;

const Template: Story<RadioButtonGroupWrapperProps> = (args) => <RadioButtonGroupWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: 'Rotation direction',
    options: [
        {
            title: 'Standard',
            isChecked: true
        },
        {
            title: 'Inverted',
            isChecked: false
        }
    ],
    style: { width: '350px' }
};
