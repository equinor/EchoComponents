import React from 'react';
import TagIcon from '../../elements/tagIcon/TagIcon';
import TagIconShadowWrapper from '../../elements/tagIcon/TagIconShadow';
import { getIcon } from '../../helpers/getIcon';
import renderer from 'react-test-renderer';

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
