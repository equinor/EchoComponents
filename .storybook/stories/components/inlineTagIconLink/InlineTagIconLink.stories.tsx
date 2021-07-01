import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import InlineTagIconLink, {
    InlineTagIconLinkProps
} from '../../../../src/components/inlineTagIconLink/InlineTagIconLink';
import InlineTagIconLinkWrapper from './InlineTagIconLinkWrapper';

export default {
    title: 'Components/InlineTagIconLink',
    component: InlineTagIconLink,
    argTypes: {}
} as Meta;

const Template: Story<InlineTagIconLinkProps> = (args) => <InlineTagIconLinkWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    tagNo: 'D-VG10-0130',
    description: 'GATE VALVE ALPHA',
    tagCategoryDescription: 'testset32323',
    legendColor: '#007079',
    onClickHandler: () => {
        console.log('ff');
    }
};
