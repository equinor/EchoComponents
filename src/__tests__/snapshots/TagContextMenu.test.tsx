import React from 'react';
import { TagContextMenu } from '../..';
import TagIcon from '../../elements/tagIcon/TagIcon';
import { getIcon } from '../../helpers/getIcon';
import renderer from 'react-test-renderer';

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
                selected={false}
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
                selected={false}
            >
                <TagIcon icon={getIcon('Electrical')} legendColor={'#FFF'} />
            </TagContextMenu>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
