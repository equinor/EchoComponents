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
 * @param {('electrical'
 *         | 'main Equipment'
 *         | 'line'
 *         | 'manual Valve'
 *         | 'circuit/starter'
 *         | 'instrument'
 *         | 'cable'
 *         | 'function'
 *         | 'signal'
 *         | 'telecom'
 *         | 'junction box'
 *         | 'administrative'
 *         | string)} iconType The type of icon you want returned
 * @return {*}  {JSX.Element} Relevant icon for the provided iconType
 */
export function getIcon(
    iconType:
        | 'electrical'
        | 'main equipment'
        | 'line'
        | 'manual valve'
        | 'circuit/starter'
        | 'instrument'
        | 'cable'
        | 'function'
        | 'signal'
        | 'telecom'
        | 'junction box'
        | 'administrative'
        | string
): JSX.Element {
    switch (iconType.toLocaleLowerCase()) {
        case 'electrical':
            return <ElectricalIcon aria-label={'electrical'} />;
        case 'main equipment':
            return <MainEquipment aria-label={'main equipment'} />;
        case 'line':
            return <Line aria-label={'line'} />;
        case 'manual valve':
            return <ManualValve aria-label={'manual valve'} />;
        case 'circuit/starter':
            return <CircuitStarter aria-label={'circuit/starter'} />;
        case 'cable':
            return <Cable title={'cable'} />;
        case 'instrument':
            return <Instrument aria-label={'instrument'} />;
        case 'function':
            return <Function aria-label={'function'} />;
        case 'signal':
            return <Signal aria-label={'signal'} />;
        case 'telecom':
            return <Telecom aria-label={'telecom'} />;
        case 'junction box':
            return <JunctionBox aria-label={'junction box'} />;
        case 'administrative':
            return <Tag aria-label={'tag'} />;
        default:
            return <Tag aria-label={'tag'} />;
    }
}
