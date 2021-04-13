import React from 'react';
import renderer from 'react-test-renderer';
import { SliderField } from '../../../elements/sliderField/SliderField';

it('renders SliderField with numeric values correctly ', () => {
    const tree = renderer
        .create(<SliderField value={1} min={0} max={5} title={'New slider'} onChange={jest.fn()} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders SliderField with labels correctly', () => {
    const tree = renderer
        .create(
            <SliderField
                value={2}
                min={0}
                max={3}
                title={'New slider with labels'}
                labels={['A', 'B', 'C', 'D']}
                onChange={jest.fn()}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
