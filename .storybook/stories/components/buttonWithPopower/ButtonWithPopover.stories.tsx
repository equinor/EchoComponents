import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import {
    ButtonWithPopoverWrapperProps,
    default as ButtonWithPopover,
    default as ButtonWithPopoverWrapper
} from './ButtonWithPopoverWrapper';

export default {
    title: 'Components/ButtonWithPopover',

    component: ButtonWithPopover,
    argTypes: {
        legendColor: { control: 'color' },
        icon: {
            control: {
                type: 'select',
                options: [
                    'Electrical',
                    'Main Equipment',
                    'Line',
                    'Manual Valve',
                    'Circuit/Starter',
                    'Cable',
                    'Instrument',
                    'Function',
                    'Signal',
                    'Telecom',
                    'Junction Box',
                    'Administrative',
                    'Other'
                ]
            }
        },
        position: { control: { type: 'object' } }
    }
} as Meta;

const Template: Story<ButtonWithPopoverWrapperProps> = (args) => <ButtonWithPopoverWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    fetchedData: [
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'test',
            itemButtonClassName: '',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'M1',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '2',
            numberOfItems: 2,
            label: 'M2',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '2',
            numberOfItems: 2,
            label: 'Loop',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '3',
            numberOfItems: 5,
            label: 'P&ID',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '3',
            numberOfItems: 1,
            label: 'Layout',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '4',
            numberOfItems: 5,
            label: 'P&ID',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '4',
            numberOfItems: 1,
            label: 'Layout',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '5',
            numberOfItems: 5,
            label: 'P&ID',
            onTagInfoClicked: (): void => {}
        },
        {
            itemType: '5',
            numberOfItems: 1,
            label: 'Layout',
            onTagInfoClicked: (): void => {}
        }
    ],
    icon: 'Electrical',
    legendColor: '#007079',
    tagNo: 'D-11PSSV0803',
    description: 'CEMENT UNIT',
    position: { left: '20px', top: '20px' } as CSSProperties,
    selectedClassName: 'tagSelected',
    selected: false
};
