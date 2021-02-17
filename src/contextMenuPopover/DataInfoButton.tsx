import { Button } from '@equinor/eds-core-react';
import React from 'react';
import { DataInformation } from '../types/dataInformation';
import style from './dataInfoButton.module.css';

export interface DataInfoButtonProps {
    data: DataInformation;
}
/**
 * Component that renders a data information button with a badge to indicate the number of items under that scoped type
 *
 * @param {DataInfoButtonProps} { data } Contains data information related to how the button should be rendered
 * numberOfItems: If number is 1 or less no badge will be displayed on the button. If number is over 99,
 * then the text 99+ will be displayed. Otherwise the provided number will be displayed
 * label: The name of the data type, will be displayed on the button
 * ariaLabel: The aria label set on the button, if empty the label will be used
 * onTagInfoClicked: The method to be called when button is pressed
 * itemButtonClassName: Used to style button if default styling is not wanted. class name might need higher precedence for overriding existing styling e.g. "div.itemButtonClassName { background-color: blue !important}"
 * @return {*}  {JSX.Element} Data information button with or without a badge based on the provided data object
 */
export const DataInfoButton: React.FC<DataInfoButtonProps> = ({ data }: DataInfoButtonProps): JSX.Element => {
    return (
        <Button
            aria-label={data.ariaLabel ?? data.label}
            onClick={data.onTagInfoClicked}
            className={`${data.itemButtonClassName} ${style.button} ${
                data.numberOfItems > 1 ? style.buttonWithBadge : ''
            }`}
            variant="ghost_icon"
            data-count={data.numberOfItems > 99 ? '99+' : data.numberOfItems}
        >
            {data.label}
        </Button>
    );
};

export default DataInfoButton;
