export interface DataInformation {
    numberOfItems: number;
    label: string;
    ariaLabel?: string;
    onTagInfoClicked: () => void;
    itemType: string;
    itemButtonClassName?: string;
}
