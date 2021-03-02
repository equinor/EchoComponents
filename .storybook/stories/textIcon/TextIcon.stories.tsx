import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TextIconProps } from '../../../src/elements/textIcon/TextIcon';
import TextIconWrapper from './TextIconWrapper';

export default {
    title: 'TextIcon',

    component: TextIconWrapper,
    argTypes: {}
} as Meta;

const Template: Story<TextIconProps> = (args) => <TextIconWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    index: 1,
    icon: 'cut',
    title: 'Saved slices',
    onClick: () => {},
    style: {},
    active: false
};
