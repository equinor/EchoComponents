import React, { useState } from 'react';
import { DialogGenerator, DialogGeneratorProps } from '../../../src/components/dialogGenerator/DialogGenerator';

const FormGeneratorWrapper: React.FC<DialogGeneratorProps> = ({
    dialogStyle,
    content,
    title,
    actionButton,
    cancelButton
}: DialogGeneratorProps) => {
    const [dialog, setDialog] = useState<boolean>(false);

    actionButton.onClick = cancelButton.onClick = () => {
        setDialog(false);
    };

    return (
        <div className={'DialogGenerator'}>
            <span
                onClick={() => {
                    setDialog(true);
                }}
            >
                Show dialog
            </span>
            {dialog && (
                <DialogGenerator
                    dialogStyle={dialogStyle}
                    content={content}
                    title={title}
                    actionButton={actionButton}
                    cancelButton={cancelButton}
                ></DialogGenerator>
            )}
        </div>
    );
};

export default FormGeneratorWrapper;
