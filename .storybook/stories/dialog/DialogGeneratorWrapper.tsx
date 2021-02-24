import React, { useState } from 'react';
import { DialogGenerator, DialogGeneratorProps } from '../../../src/components/dialogGenerator/DialogGenerator';

const FormGeneratorWrapper: React.FC<DialogGeneratorProps> = ({
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
            <DialogGenerator
                content={content}
                title={title}
                actionButton={actionButton}
                cancelButton={cancelButton}
            ></DialogGenerator>
        </div>
    );
};

export default FormGeneratorWrapper;
