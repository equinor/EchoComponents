import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../../../components/dropdown/Dropdown';

it('renders dropdown with Home style and showSearch correctly', () => {
    let selected = '';
    const setSelected = (value: string): void => {
        selected = value;
    };

    const tree = renderer
        .create(
            <Dropdown
                selected={selected}
                setSelected={setSelected}
                data={[]}
                openDownWards={true}
                placeholder="Placeholder text"
                showSearch={true}
                isDisabled={false}
                styleClass={'compact'}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders dropdown with Default style and not showSearch correctly', () => {
    let selected = '';
    const setSelected = (value: string): void => {
        selected = value;
    };

    const tree = renderer
        .create(
            <Dropdown
                selected={selected}
                setSelected={setSelected}
                data={[]}
                openDownWards={true}
                placeholder="Placeholder text"
                showSearch={false}
                isDisabled={false}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
