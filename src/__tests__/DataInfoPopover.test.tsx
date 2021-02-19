import { screen, waitFor } from '@testing-library/dom';
import { act, render } from '@testing-library/react';
import React from 'react';
import { DataInformation } from '..';
import DataInfoPopover from '../components/contextMenuPopover/DataInfoPopover';

beforeAll(() => {
    jest.useFakeTimers();
});

afterAll(() => {
    jest.useRealTimers();
});
test('on initial load the banner should not be shown when dataToShow list is empty and loading is false', () => {
    const dataToShow: DataInformation[] = [];

    render(<DataInfoPopover dataToShow={dataToShow} isLoading={false} />);

    expect(screen.queryByText('No information to display')).toBeFalsy();
});

test('on initial load the banner should not be shown when dataToShow list is empty, but after a 400 ms a message stating no information to display should be shown', async () => {
    const dataToShow: DataInformation[] = [];

    render(<DataInfoPopover dataToShow={dataToShow} isLoading={false} />);

    expect(screen.queryByText('No information to display')).toBeFalsy();

    act(() => {
        jest.advanceTimersByTime(400);
    });
    await waitFor(() => {
        expect(screen.getByText('No information to display')).toBeTruthy();
    });
});
