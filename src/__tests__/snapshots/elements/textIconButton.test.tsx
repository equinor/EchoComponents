import React from 'react';
import renderer from 'react-test-renderer';
import { TextIconButton } from '../../..';

it('renders TextIconButton correctly', () => {
    const tree = renderer.create(<TextIconButton icon={'cut'} title="saved slices" onClick={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders TextIconButton with input style', () => {
    const tree = renderer
        .create(<TextIconButton icon={'cut'} title="saved slices" onClick={jest.fn()} style={{ background: 'pink' }} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
