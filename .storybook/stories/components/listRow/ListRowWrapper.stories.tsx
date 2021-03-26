import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import ListRowWrapper, { ListRowWrapperProps } from './ListRowWrapper';

export default {
    title: 'Components/ListRow',
    component: ListRowWrapper,
    argTypes: {
        expandedIcons: {
            control: {
                type: 'inline-check',
                options: ['cloud_upload', 'file_copy', 'edit', 'link', 'delete_to_trash', 'sync']
            }
        },
        icons: {
            control: {
                type: 'inline-check',
                options: ['cloud_upload', 'file_copy', 'edit', 'link', 'delete_to_trash', 'sync']
            }
        }
    }
} as Meta;

const Template: Story<ListRowWrapperProps> = (args) => <ListRowWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    style: { width: '350px' },
    isDraggable: true,
    title: 'Item 0',
    subTitle: 'SubItem 0',
    icons: ['link', 'delete_to_trash'],
    expandedIcons: ['cloud_upload'],
    expandable: true
};
