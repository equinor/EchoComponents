import React from 'react';
import renderer from 'react-test-renderer';
import { RadioButtonGroup } from '../../../elements/radioButtonGroup/RadioButtonGroup';
import { RadioButtonItem } from '../../../types/radioButtonItem';

it('renders RadioButtonGroup correctly ', () => {
    const buttons: RadioButtonItem[] = [
        { title: 'First value', isChecked: false },
        { title: 'Second value', isChecked: true }
    ];
    const tree = renderer
        .create(<RadioButtonGroup title={'My radio button group'} onSelected={jest.fn()} choices={buttons} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
