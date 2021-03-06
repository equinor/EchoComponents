import { Banner, DotProgress } from '@equinor/eds-core-react';
import React, { useEffect, useState } from 'react';
import { Icon } from '../../elements/icon/Icon';
import { themeConst } from '../../theme/themeConst';
import { DataInformation } from '../../types/dataInformation';
import DataInfoButton from './DataInfoButton';
import style from './dataInfoPopover.module.css';

export interface DataInfoPopoverProps {
    dataToShow: DataInformation[];
    isLoading: boolean;
}

/**
 * Component that renders a popover with data information buttons
 *
 * @param {DataInfoPopoverProps} {
 *  dataToShow: list of DataInformation objects to be displayed.
 *  The itemType in these objects are used to group them together in the popover
 *  isLoading: loading flag that tells if a dot progress should be displayed if data is being fetched
 * }
 * @return {*} {JSX.Element} Popover with data information buttons based on the provided DataInformation objects
 */
const DataInfoPopover: React.FC<DataInfoPopoverProps> = ({
    dataToShow,
    isLoading
}: DataInfoPopoverProps): JSX.Element => {
    const getDataGroupings = dataToShow.reduce((dictionary: { [itemType: string]: DataInformation[] }, current) => {
        if (!dictionary[current.itemType]) {
            dictionary[current.itemType] = [current];
        } else {
            dictionary[current.itemType] = [...dictionary[current.itemType], current];
        }
        return dictionary;
    }, {});

    const [showNoDataIndicator, setShowNoDataIndicator] = useState(false);

    useEffect(() => {
        const delay = 200;

        const timer = setTimeout(() => setShowNoDataIndicator(true), delay);
        return (): void => {
            clearTimeout(timer);
        };
    });

    return (
        <div className={style.wrapper}>
            <div className={style.arrow}></div>
            <div className={style.optionsPopover}>
                {isLoading && dataToShow.length === 0 && <DotProgress color="neutral" />}
                {showNoDataIndicator && !isLoading && dataToShow.length === 0 && (
                    <Banner className={style.banner}>
                        <Banner.Icon variant="info">
                            <Icon name="info_circle" title="No data to display" color={themeConst.asBuilt} />
                        </Banner.Icon>
                        <Banner.Message className={style.infoMessage}>No information to display</Banner.Message>
                    </Banner>
                )}
                {Object.keys(getDataGroupings).map((key) => {
                    return (
                        <div key={key} className={style.groupWrapper}>
                            {getDataGroupings[key].map((data, index) => {
                                return <DataInfoButton data={data} key={index} />;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DataInfoPopover;
