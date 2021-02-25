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

Default.args = {
    style: { width: '400px' },
    title: 'Private animations',
    items: [
        {
            title: 'Scaffold',
            subTitle: 'veims@equinor.com',
            icons: [
                {
                    icon: 'link',
                    onClick: () => {}
                },
                {
                    icon: 'delete_to_trash',
                    onClick: () => {}
                }
            ]
        },
        {
            title: 'Scaffold2',
            subTitle: 'veims@equinor.com2',
            icons: [
                {
                    icon: 'link',
                    onClick: () => {}
                },
                {
                    icon: 'delete_to_trash',
                    onClick: () => {}
                }
            ]
        },
        {
            title: 'Scaffold3',
            subTitle: 'veims@equinor.com3',
            icons: [
                {
                    icon: 'link',
                    onClick: () => {}
                },
                {
                    icon: 'delete_to_trash',
                    onClick: () => {}
                }
            ]
        }
    ],
    isMovable: true,
    expanded: [
        {
            icon: 'cloud_upload',
            onClick: () => {}
        },
        {
            icon: 'file_copy',
            onClick: () => {}
        },
        {
            icon: 'edit',
            onClick: () => {}
        }
    ]
};
