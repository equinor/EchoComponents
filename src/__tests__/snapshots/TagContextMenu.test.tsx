import React from 'react';
import renderer from 'react-test-renderer';
import { TagContextMenu } from '../..';
import { getIcon } from '../../helpers/getIcon';
import TagIcon from '../../tagIcon/TagIcon';

it('renders closed TagContextMenu correctly', () => {
    const setExpanded = jest.fn();
    const openTagInformation = jest.fn();

    const tree = renderer
        .create(
            <TagContextMenu
                expanded={false}
                setExpanded={setExpanded}
                tagNo={'11PT100'}
                description={'Pressure Transmitter for Instrument Air Supply '}
                openTagInformation={openTagInformation}
            >
                <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'} />
            </TagContextMenu>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders open TagContextMenu correctly', () => {
    const setExpanded = jest.fn();
    const openTagInformation = jest.fn();

    const tree = renderer
        .create(
            <TagContextMenu
                expanded={true}
                setExpanded={setExpanded}
                tagNo={'11PT100'}
                description={'Pressure Transmitter for Instrument Air Supply '}
                openTagInformation={openTagInformation}
            >
                <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'} />
            </TagContextMenu>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
