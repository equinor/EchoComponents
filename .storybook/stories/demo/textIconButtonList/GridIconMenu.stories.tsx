import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { GridIconMenu, GridIconMenuProps } from './GridIconMenu';

export default {
    title: 'Demo/GridTextIconButtonMenu',
    component: GridIconMenu,
    argTypes: {}
} as Meta;

const Template: Story<GridIconMenuProps> = (args) => <GridIconMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
    activeIndex: 4,
    gridStyle: { width: '350px' },
    items: [
        {
            index: 0,
            icon: 'invert_colors',
            title: 'Disciplines',
            onClick: () => {}
        },
        {
            index: 1,
            icon: 'cut',
            title: 'Saved slices',
            onClick: () => {}
        },
        {
            index: 2,
            icon: 'bookmarks',
            title: 'Bookmarks',
            onClick: () => {}
        },
        {
            index: 3,
            icon: 'convenience_store',
            title: 'Floor',
            onClick: () => {}
        },
        {
            index: 4,
            icon: 'view_stream',
            title: 'Areas',
            onClick: () => {}
        },
        {
            index: 5,
            icon: 'view_module',
            title: 'Modules',
            onClick: () => {}
        },
        {
            index: 6,
            icon: 'widgets',
            title: 'Building block',
            onClick: () => {}
        },
        {
            index: 7,
            icon: 'videocam',
            title: 'Animations',
            onClick: () => {}
        },
        {
            index: 8,
            icon: 'assignment_return',
            title: 'SO',
            onClick: () => {}
        }
    ]
};
