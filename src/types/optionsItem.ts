export interface OptionsItem {
    color?: string;
    title: string;
    selectedColumnIndex: number;
    onSelected: (rowIndex: number, columnIndex: number) => void;
}
