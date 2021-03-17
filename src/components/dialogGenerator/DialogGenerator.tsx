import { Button, Dialog } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { ActionButton } from '../../types/actionButton';
import styles from './dialogGenerator.module.css';

export interface DialogGeneratorProps {
    dialogStyle?: CSSProperties;
    children: React.ReactNode;
    title: string;
    actionButtons: ActionButton[];
}

export const DialogGenerator: React.FC<DialogGeneratorProps> = ({
    dialogStyle,
    title,
    children,
    actionButtons
}: DialogGeneratorProps): JSX.Element => {
    return (
        <Dialog style={dialogStyle}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.CustomContent>{children}</Dialog.CustomContent>
            {actionButtons.length > 0 && (
                <Dialog.Actions className={styles.footer}>
                    {actionButtons.map((actionButton, index) => {
                        return (
                            <Button key={index} onClick={actionButton.onClick} variant={actionButton.variant}>
                                {actionButton.title}
                            </Button>
                        );
                    })}
                </Dialog.Actions>
            )}
        </Dialog>
    );
};
