import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import SliderFieldWrapper, { OptionType, SliderFieldWrapperProps } from './SliderFieldWrapper';

export default {
    title: 'Elements/Functional/SliderField',

    component: SliderFieldWrapper,
    argTypes: {
        variant: {
            control: {
                type: 'radio',
                options: [OptionType.NUMERIC, OptionType.CUSTOM]
            }
        }
    }
} as Meta;

const Template: Story<SliderFieldWrapperProps> = (args) => <SliderFieldWrapper {...args} />;
const labelsToUse = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const Default = Template.bind({});

Default.args = {
    value: 2,
    min: 0,
    max: 5,
    labels: labelsToUse,
    title: 'Movement speed',
    onChange: () => {},
    style: { width: '350px' },
    variant: OptionType.NUMERIC
};
