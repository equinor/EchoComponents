import { IconItem } from './iconItem';

export interface ExpandableRowProps {
    iconItems: IconItem[];
    expanded: boolean;
    setExpanded: (status: boolean) => void;
}
