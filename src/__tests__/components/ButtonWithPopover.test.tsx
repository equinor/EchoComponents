import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ButtonWithPopover from '../../components/buttonWithPopover/ButtonWithPopover';
import { DataInformation } from '../../types/dataInformation';

test('popover button should show open state', () => {
    let expanded = true;
    const isLoading = false;
    const setExpanded = (): void => {
        expanded = true;
    };
    const fetchedDataToShow: DataInformation[] = [];

    render(
        <ButtonWithPopover
            expanded={expanded}
            onShowMoreClicked={setExpanded}
            fetchedData={fetchedDataToShow}
            isLoading={isLoading}
        />
    );

    expect(screen.getByLabelText('close more options')).toBeTruthy();
    expect(screen.queryByText('more options')).toBeNull();
});

test('popover button should show loading state', () => {
    const fetchedDataToShow: DataInformation[] = [];
    const isLoading = true;

    let expanded = true;
    const setExpanded = (): void => {
        expanded = true;
    };

    render(
        <ButtonWithPopover
            expanded={expanded}
            onShowMoreClicked={setExpanded}
            fetchedData={fetchedDataToShow}
            isLoading={isLoading}
        />
    );

    expect(screen.getAllByRole('progressbar')).toBeTruthy();
    expect(screen.queryByText('more options')).toBeNull();
});

test('popover data info buttons should be visible', () => {
    const fetchedDataToShow: DataInformation[] = [
        { itemType: 'document', numberOfItems: 4, ariaLabel: 'P&ID', label: 'P&ID', onTagInfoClicked: jest.fn() },
        { itemType: 'notifications', numberOfItems: 4, ariaLabel: 'M2', label: 'M2', onTagInfoClicked: jest.fn() }
    ];
    const isLoading = false;

    let expanded = true;
    const setExpanded = (): void => {
        expanded = true;
    };

    render(
        <ButtonWithPopover
            expanded={expanded}
            onShowMoreClicked={setExpanded}
            fetchedData={fetchedDataToShow}
            isLoading={isLoading}
        />
    );

    expect(screen.getByLabelText(fetchedDataToShow[0].ariaLabel as string)).toBeTruthy();
    expect(screen.getByLabelText(fetchedDataToShow[1].ariaLabel as string)).toBeTruthy();
});

test('should click show more, then hide again and fetch data should only be called once', () => {
    const fetchedDataToShow: DataInformation[] = [];
    const isLoading = false;
    let expanded = false;
    const setExpanded = (): void => {
        expanded = true;
    };

    render(
        <ButtonWithPopover
            expanded={expanded}
            onShowMoreClicked={setExpanded}
            fetchedData={fetchedDataToShow}
            isLoading={isLoading}
        />
    );

    const showPopoverButton = screen.getByRole(`button`);

    // open popover
    fireEvent.click(showPopoverButton);
    // close popover
    fireEvent.click(showPopoverButton);

    expect(screen.queryByLabelText('close more options')).toBeFalsy();
    expect(screen.queryByText('more options')).toBeTruthy();
});
