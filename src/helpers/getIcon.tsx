import React from 'react';
import { ReactComponent as Cable } from '../icons/tags/Cable-icon.svg';
import { ReactComponent as CircuitStarter } from '../icons/tags/Circuit-icon.svg';
import { ReactComponent as ElectricalIcon } from '../icons/tags/Electrical-icon.svg';
import { ReactComponent as Function } from '../icons/tags/Function-icon.svg';
import { ReactComponent as Instrument } from '../icons/tags/Instrument-icon.svg';
import { ReactComponent as JunctionBox } from '../icons/tags/JunctionBox-icon.svg';
import { ReactComponent as Line } from '../icons/tags/Line-icon.svg';
import { ReactComponent as MainEquipment } from '../icons/tags/MainEquipment-icon.svg';
import { ReactComponent as ManualValve } from '../icons/tags/ManualValve-icon.svg';
import { ReactComponent as Signal } from '../icons/tags/Signal-icon.svg';
import { ReactComponent as Tag } from '../icons/tags/Tag-icon.svg';
import { ReactComponent as Telecom } from '../icons/tags/Telecom-icon.svg';
/**
 * Method that returns the relevant Icon for the iconType provided
 * Tag icon is the default JSX.Element Icon returned
 * @export
 * @param {('Electrical'
 *         | 'Main Equipment'
 *         | 'Line'
 *         | 'Manual Valve'
 *         | 'Circuit/Starter'
 *         | 'Instrument'
 *         | 'Cable'
 *         | 'Function'
 *         | 'Signal'
 *         | 'Telecom'
 *         | 'Junction Box'
 *         | 'Administrative'
 *         | string)} iconType The type of icon you want returned
 * @return {*}  {JSX.Element} Relevant icon for the provided iconType
 */
export function getIcon(
    iconType:
        | 'Electrical'
        | 'Main Equipment'
        | 'Line'
        | 'Manual Valve'
        | 'Circuit/Starter'
        | 'Instrument'
        | 'Cable'
        | 'Function'
        | 'Signal'
        | 'Telecom'
        | 'Junction Box'
        | 'Administrative'
        | string
): JSX.Element {
    switch (iconType) {
        case 'Electrical':
            return <ElectricalIcon aria-label={'electrical'} />;
        case 'Main Equipment':
            return <MainEquipment aria-label={'main equipment'} />;
        case 'Line':
            return <Line aria-label={'line'} />;
        case 'Manual Valve':
            return <ManualValve aria-label={'manual valve'} />;
        case 'Circuit/Starter':
            return <CircuitStarter aria-label={'circuit/starter'} />;
        case 'Cable':
            return <Cable title={'cable'} />;
        case 'Instrument':
            return <Instrument aria-label={'instrument'} />;
        case 'Function':
            return <Function aria-label={'function'} />;
        case 'Signal':
            return <Signal aria-label={'signal'} />;
        case 'Telecom':
            return <Telecom aria-label={'telecom'} />;
        case 'Junction Box':
            return <JunctionBox aria-label={'junction box'} />;
        case 'Administrative':
            return <Tag aria-label={'tag'} />;
        default:
            return <Tag aria-label={'tag'} />;
    }
}
