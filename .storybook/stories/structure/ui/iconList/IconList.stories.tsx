import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { IconListProps } from '../../../../../src/structure/ui/iconList/IconList';
import IconListWrapper from './IconListWrapper';

export default {
    title: 'Structure/UI/IconList',

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
            title: 'Item 0',
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
            subTitle: 'Subtitle 1',
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
            title: 'Item 3',
            subTitle: 'Subtitle 3',
            icons: []
        },
        {
            title: 'Item 4',
            subTitle: 'Subtitle 4',
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
    expandedIcons: [
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
