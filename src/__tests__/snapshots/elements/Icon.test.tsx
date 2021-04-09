import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '../../..';

it('renders Icon wrapper correctly', () => {
    const tree = renderer.create(<Icon name={'arrow_up'} color={'#000'} title={'Up'} />).toJSON();
    expect(tree).toMatchSnapshot();
});
