import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { LinkCardProps } from '../../../src/structure/linkCard/LinkCard';
import LinkCardWrapper from './LinkCardWrapper';

export default {
    title: 'LinkCard',

    component: LinkCardWrapper,
    argTypes: {}
} as Meta;

const Template: Story<LinkCardProps> = (args) => <LinkCardWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {};
