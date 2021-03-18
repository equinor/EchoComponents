import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonWithPopover, ContextMenu, DataInformation, getIcon } from '../../..';
import { themeConst } from '../../../theme/themeConst';

it('renders ContextMenu without more info button correctly', () => {
    const setExpanded = jest.fn();
    const openTagInformation = jest.fn();

    const tree = renderer
        .create(
            <ContextMenu
                icon={getIcon('Signal')}
                expanded={true}
                setExpanded={setExpanded}
                legendColor={themeConst.asBuilt}
                tagNo={'361B1-MA001-Q02'}
                description={'Pipehandling Crane Running'}
                positionStyle={{ left: '20px', top: '20px' }}
                openTagInformation={openTagInformation}
                selected={false}
            ></ContextMenu>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders ContextMenu with more info button correctly', () => {
    const setExpanded = jest.fn();
    const openTagInformation = jest.fn();
    const fetchDataToShow = jest.fn();
    const fetchedDataToShow: DataInformation[] = [];

    const tree = renderer
        .create(
            <ContextMenu
                icon={getIcon('Signal')}
                expanded={true}
                setExpanded={setExpanded}
                legendColor={themeConst.asBuilt}
                tagNo={'361B1-MA001-Q02'}
                description={'Pipehandling Crane Running'}
                positionStyle={{ left: '20px', top: '20px' }}
                openTagInformation={openTagInformation}
                selected={false}
            >
                <ButtonWithPopover
                    fetchDataToShow={fetchDataToShow}
                    isLoading={false}
                    fetchedData={fetchedDataToShow}
                />
            </ContextMenu>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
