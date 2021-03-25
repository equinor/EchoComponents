import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { LinkCard, LinkCardProps } from './../../../../src/structure/linkCard/LinkCard';
export default {
    title: 'Structure/LinkCard',

    component: LinkCard,
    argTypes: {}
} as Meta;

const Template: Story<LinkCardProps> = (args) => <LinkCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    style: {},
    title: 'Johan Sverdrup',
    subTitle: 'Processing Platform 2',
    links: [
        {
            title: 'Full',
            url: '#'
        },
        {
            title: 'HVDC',
            url: 'https://yahoo.com',
            target: '_blank'
        },
        {
            title: 'MSF',
            url: '#'
        },
        {
            title: 'UPM',
            url: '#'
        }
    ],
    image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRLqgF0OqRHg/v0/1200x900.jpg'
};
