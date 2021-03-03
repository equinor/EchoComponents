import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import { LinkCardProps } from '../../../../../src/structure/ui/linkCard/LinkCard';
import LinkCardWrapper from './LinkCardWrapper';

export default {
    title: 'Structure/UI/LinkCard',

    component: LinkCardWrapper,
    argTypes: {}
} as Meta;

const Template: Story<LinkCardProps> = (args) => <LinkCardWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    style: { width: '310px' } as CSSProperties,
    title: 'Johan Sverdrup',
    subTitle: 'Processing Platform 2',
    links: [
        {
            title: 'Full',
            url: '#'
        },
        {
            title: 'HVDC',
            url: '#'
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
