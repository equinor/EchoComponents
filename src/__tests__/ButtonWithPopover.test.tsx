import { fireEvent, render } from '@testing-library/react';

import ButtonWithPopover from '../components/buttonWithPopover/ButtonWithPopover';
import { DataInformation } from '../types/dataInformation';
import React from 'react';
import { screen } from '@testing-library/dom';

test('should click show more and popover button should show open state', () => {
    const fetchDataToShow = jest.fn();
    const fetchedDataToShow: DataInformation[] = [];
    const isLoading = false;

    render(
        <ButtonWithPopover fetchDataToShow={fetchDataToShow} fetchedData={fetchedDataToShow} isLoading={isLoading} />
    );

    const showPopoverButton = screen.getByRole(`button`);

    fireEvent.click(showPopoverButton);

    expect(fetchDataToShow).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('close more options')).toBeTruthy();
    expect(screen.queryByText('more options')).toBeNull();
});

test('should click show more and popover button should show loading state', () => {
    const fetchDataToShow = jest.fn();
    const fetchedDataToShow: DataInformation[] = [];
    const isLoading = true;

    render(
        <ButtonWithPopover fetchDataToShow={fetchDataToShow} fetchedData={fetchedDataToShow} isLoading={isLoading} />
    );

    const showPopoverButton = screen.getByRole(`button`);

    fireEvent.click(showPopoverButton);

    expect(fetchDataToShow).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole('progressbar')).toBeTruthy();
    expect(screen.queryByText('more options')).toBeNull();
});

test('should click show more and popover data info buttons should be visible', () => {
    const fetchDataToShow = jest.fn();
    const fetchedDataToShow: DataInformation[] = [
        { itemType: 'document', numberOfItems: 4, ariaLabel: 'P&ID', label: 'P&ID', onTagInfoClicked: jest.fn() },
        { itemType: 'notifications', numberOfItems: 4, ariaLabel: 'M2', label: 'M2', onTagInfoClicked: jest.fn() }
    ];
    const isLoading = false;

    render(
        <ButtonWithPopover fetchDataToShow={fetchDataToShow} fetchedData={fetchedDataToShow} isLoading={isLoading} />
    );

    const showPopoverButton = screen.getByRole(`button`);

    fireEvent.click(showPopoverButton);

    expect(fetchDataToShow).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText(fetchedDataToShow[0].ariaLabel as string)).toBeTruthy();
    expect(screen.getByLabelText(fetchedDataToShow[1].ariaLabel as string)).toBeTruthy();
});

test('should click show more, then hide again and fetch data should only be called once', () => {
    const fetchDataToShow = jest.fn();
    const fetchedDataToShow: DataInformation[] = [];
    const isLoading = false;

    render(
        <ButtonWithPopover fetchDataToShow={fetchDataToShow} fetchedData={fetchedDataToShow} isLoading={isLoading} />
    );

    const showPopoverButton = screen.getByRole(`button`);

    // open popover
    fireEvent.click(showPopoverButton);
    // close popover
    fireEvent.click(showPopoverButton);

    expect(fetchDataToShow).toHaveBeenCalledTimes(1);
    expect(screen.queryByLabelText('close more options')).toBeFalsy();
    expect(screen.queryByText('more options')).toBeTruthy();
});
