import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import InlineTagIconLink, {
    InlineTagIconLinkProps
} from '../../../../src/components/inlineTagIconLink/InlineTagIconLink';

export default {
    title: 'Components/InlineTagIconLink',
    component: InlineTagIconLink,
    argTypes: {}
} as Meta;

const Template: Story<InlineTagIconLinkProps> = (args) => <InlineTagIconLink {...args} />;

export const Default = Template.bind({});

Default.args = {
    tagNo: 'test',
    description: '221312',
    tagCategoryDescription: 'testset32323',
    legendColor: '#FF0000',
    onClickHandler: () => {
        console.log('ff');
    }
};
