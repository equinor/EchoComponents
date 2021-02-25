import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { IconListProps } from '../../../src/structure/iconList/IconList';
import IconListWrapper from './IconListWrapper';

export default {
    title: 'IconList',

    component: IconListWrapper,
    argTypes: {}
} as Meta;

const Template: Story<IconListProps> = (args) => <IconListWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {};
