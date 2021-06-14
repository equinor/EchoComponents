import React from 'react';
import renderer from 'react-test-renderer';
import { InlineTagIconLink } from '../../../components/inlineTagIconLink/InlineTagIconLink';

it('renders inlineTagIconLink correctly', () => {
    const tree = renderer
        .create(
            <InlineTagIconLink
                tagNo={'test'}
                description={'221312'}
                tagCategoryDescription={'testset32323'}
                legendColor={'#FF0000'}
                onClickHandler={() => {
                    console.log('ff');
                }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
