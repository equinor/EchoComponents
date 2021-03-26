import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import IconListWrapper, { IconListWrapperProps } from './IconListWrapper';

export default {
    title: 'Structure/UI/IconList',

    component: IconListWrapper,
    argTypes: {
        expandedIcons: {
            control: {
                type: 'inline-check',
                options: ['cloud_upload', 'file_copy', 'edit', 'link', 'delete_to_trash', 'sync']
            }
        }
    }
} as Meta;

const Template: Story<IconListWrapperProps> = (args) => <IconListWrapper {...args} />;

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
    isDraggable: true,
    expandedIcons: ['cloud_upload', 'file_copy', 'edit'],
    isExpandable: true
};
