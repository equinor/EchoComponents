import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { NavIconProps } from '../../../../../src/elements/icons/navIcon/NavIcon';
import NavIconWrapper from './NavIconWrapper';

export default {
    title: 'NavIcon',

    component: NavIconWrapper,
    argTypes: {}
} as Meta;

const Template: Story<NavIconProps> = (args) => <NavIconWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    icon: 'visibility',
    selected: false,
    size: 'smaller',
    title: 'Eye'
};
