import { Button, CircularProgress } from '@equinor/eds-core-react';
import React from 'react';
import { Icon } from '../../elements/icon/Icon';
import { themeConst } from '../../theme/themeConst';
import { DataInformation } from '../../types/dataInformation';
import DataInfoPopover from '../contextMenuPopover/DataInfoPopover';
import style from './buttonWithPopover.module.css';

export interface ButtonWithPopoverProps {
    onShowMoreClicked: () => void;
    fetchedData: DataInformation[];
    isLoading: boolean;
    expanded: boolean;
}
/**
 * Component that renders a round button, that opens a popover upon being clicked
 *
 * @param {ButtonWithPopoverProps} {
 *     fetchDataToShow: Data fetch method called upon button clicked
 *     fetchedData: array of DataInformation that popover should be displayed when button is clicked.
 *                  Meant to be the return value of the fetchDataToShow method
 *     isLoading: flag to show loading state if data fetch takes some time
 * }
 * @return {*}  {JSX.Element} Round button with belonging popover to display data information buttons
 */
export const ButtonWithPopover: React.FC<ButtonWithPopoverProps> = ({
    onShowMoreClicked,
    fetchedData,
    isLoading,
    expanded
}: ButtonWithPopoverProps): JSX.Element => {
    const renderPopoverButton = (): JSX.Element => {
        if (!expanded) {
            return <Icon name="more_horizontal" title="more options" color={themeConst.asBuilt}></Icon>;
        } else {
            return <Icon name="close" title="close more options" color={themeConst.asBuilt}></Icon>;
        }
    };

    return (
        <div className={style.wrapper}>
            {expanded && isLoading ? (
                <div className={style.button} onClick={onShowMoreClicked}>
                    <CircularProgress className={style.spinner} />
                </div>
            ) : (
                <Button className={style.button} variant="ghost_icon" onClick={onShowMoreClicked}>
                    {renderPopoverButton()}
                </Button>
            )}

            {expanded && <DataInfoPopover isLoading={isLoading} dataToShow={fetchedData} />}
        </div>
    );
};

export default ButtonWithPopover;
