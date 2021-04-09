import React from 'react';
import renderer from 'react-test-renderer';
import { SliderField } from '../../../elements/sliderField/SliderField';

it('renders SliderField correctly ', () => {
    const tree = renderer
        .create(<SliderField value={1} min={0} max={5} title={'New slider'} onChange={jest.fn()} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
