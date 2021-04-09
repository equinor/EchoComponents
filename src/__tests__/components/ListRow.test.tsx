import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ExpandableRowProps } from '../..';
import { ListRow } from '../../components/listRow/ListRow';

test('should test that opening and closing expandable row works correctly', () => {
    let expanded = false;
    const setExpanded = (): void => {
        expanded = !expanded;
    };
    const item = {
        title: 'First item',
        subTitle: 'Sub title',
        icons: [{ icon: 'edit', onClick: jest.fn() }]
    };
    const getExpandable = (expandedProp: boolean): ExpandableRowProps => {
        return {
            expanded: expandedProp,
            setExpanded: setExpanded,
            iconItems: [{ icon: 'cloud_upload', onClick: jest.fn() }]
        };
    };

    const { rerender } = render(
        <ListRow isDraggable={true} item={item} rowIndex={0} expandable={getExpandable(expanded)} />
    );

    const openExpandedRowButton = screen.getByText('Expand');
    fireEvent.click(openExpandedRowButton);

    expect(expanded).toBeTruthy();
    rerender(<ListRow isDraggable={true} item={item} rowIndex={0} expandable={getExpandable(expanded)} />);

    expect(screen.getByText('cloud_upload')).toBeTruthy();

    const closeExpandedRowButton = screen.getByText('Close');
    fireEvent.click(closeExpandedRowButton);

    expect(expanded).toBeFalsy();
    rerender(<ListRow isDraggable={true} item={item} rowIndex={0} expandable={getExpandable(expanded)} />);

    expect(screen.queryByText('cloud_upload')).toBeFalsy();
});

test('should test clicking on icons in expandable row', () => {
    let expanded = false;
    const setExpanded = (): void => {
        expanded = !expanded;
    };
    const item = {
        title: 'First item',
        subTitle: 'Sub title',
        icons: [{ icon: 'edit', onClick: jest.fn() }]
    };

    const expandableIconOnClickSpy = jest.fn();
    const getExpandable = (expandedProp: boolean): ExpandableRowProps => {
        return {
            expanded: expandedProp,
            setExpanded: setExpanded,
            iconItems: [{ icon: 'cloud_upload', onClick: expandableIconOnClickSpy }]
        };
    };

    const { rerender } = render(
        <ListRow isDraggable={true} item={item} rowIndex={0} expandable={getExpandable(expanded)} />
    );

    const openExpandedRowButton = screen.getByText('Expand');
    fireEvent.click(openExpandedRowButton);

    expect(expanded).toBeTruthy();
    rerender(<ListRow isDraggable={true} item={item} rowIndex={0} expandable={getExpandable(expanded)} />);

    const expandedItemButtonToClick = screen.getByText('cloud_upload');
    fireEvent.click(expandedItemButtonToClick);
    expect(expandableIconOnClickSpy).toBeCalled();
});

test('should test clicking on icons in list row', () => {
    let expanded = false;
    const setExpanded = (): void => {
        expanded = !expanded;
    };

    const itemIconOnClickSpy = jest.fn();
    const item = {
        title: 'First item',
        subTitle: undefined,
        icons: [{ icon: 'edit', onClick: itemIconOnClickSpy }]
    };

    const getExpandable = (expandedProp: boolean): ExpandableRowProps => {
        return {
            expanded: expandedProp,
            setExpanded: setExpanded,
            iconItems: [{ icon: 'cloud_upload', onClick: jest.fn() }]
        };
    };

    render(<ListRow isDraggable={true} item={item} rowIndex={0} expandable={getExpandable(expanded)} />);

    const itemIconButtonToClick = screen.getByText('edit');
    fireEvent.click(itemIconButtonToClick);
    expect(itemIconOnClickSpy).toBeCalled();
});
