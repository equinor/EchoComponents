export interface ActionButton {
    title: string;
    onClick: () => void;
    variant?: 'contained' | 'outlined' | 'ghost' | 'ghost_icon';
    color?: 'danger' | 'primary' | 'secondary';
}
