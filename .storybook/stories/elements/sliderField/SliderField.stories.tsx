import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { SliderFieldProps } from '../../../../src/elements/sliderField/SliderField';
import SliderFieldWrapper from './SliderFieldWrapper';

export default {
    title: 'Elements/Functional/SliderField',

    component: SliderFieldWrapper,
    argTypes: {}
} as Meta;

const Template: Story<SliderFieldProps> = (args) => <SliderFieldWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: 15,
    min: 0,
    max: 20,
    title: 'Movement speed',
    onChange: () => {},
    style: { width: '350px' }
};
