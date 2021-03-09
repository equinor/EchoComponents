import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ListRowProps } from '../../../../../src/components/ui/listRow/ListRow';
import ListRowWrapper from './ListRowWrapper';

export default {
    title: 'Components/UI/ListRow',
    component: ListRowWrapper,
    argTypes: {}
} as Meta;

const Template: Story<ListRowProps> = (args) => <ListRowWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    style: { width: '350px' },
    isMovable: true,
    item: {
        title: 'Item 0',
        subTitle: 'SubItem 0',
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
    ],
    expanded: false,
    rowIndex: 0,
    onExpand: () => {}
};
