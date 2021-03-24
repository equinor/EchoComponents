import React from 'react';
import renderer from 'react-test-renderer';
import { getIcon, TagIcon, TagIconShadowWrapper } from '../../..';

it('renders TagIcon correctly', () => {
    const tree = renderer.create(<TagIcon icon={getIcon('Tag')} legendColor={'#FFF'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders TagIcon with shadow correctly', () => {
    const tree = renderer
        .create(
            <TagIconShadowWrapper>
                <TagIcon icon={getIcon('Tag')} legendColor={'#FFF'} />
            </TagIconShadowWrapper>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
