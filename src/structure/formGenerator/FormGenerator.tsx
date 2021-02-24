import { Button, TextField } from '@equinor/eds-core-react';
import React, { CSSProperties } from 'react';
import { Icon } from '../../elements/icon/Icon';
import styles from './formGenerator.module.css';

export interface FormGeneratorProps {
    widthStyle: CSSProperties;
    fields: (FormTextField | FormNoteField)[];
    submit: FormSubmit;
}

export enum FieldTypes {
    text = 'text',
    number = 'number',
    note = 'note'
}

export interface FormTextField {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (index: number, value: string | number) => void;
    type: FieldTypes;
    style: CSSProperties;
    meta?: string;
}

export interface FormNoteField {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (index: number, value: string) => void;
    type: FieldTypes;
    style: CSSProperties;
    meta?: string;
}

export interface FormSubmit {
    icon: string;
    title: string;
    onSubmit: () => void;
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({
    widthStyle,
    fields,
    submit
}: FormGeneratorProps): JSX.Element => {
    return (
        <div className={styles.formGenerator} style={widthStyle}>
            <div className={styles.fields}>
                {fields.map((field, index) => {
                    if (field.type === FieldTypes.text || field.type === FieldTypes.number) {
                        const textField: FormTextField = field as FormTextField;
                        return (
                            <div className={styles.field} key={index} style={textField.style}>
                                <TextField
                                    id={textField.id}
                                    placeholder={textField.placeholder}
                                    label={textField.label}
                                    autoComplete="off"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
                                        if (field.type === FieldTypes.text) {
                                            textField.onChange(index, e.target.value);
                                        } else {
                                            textField.onChange(index, parseFloat(e.target.value));
                                        }
                                    }}
                                    type={textField.type === FieldTypes.number ? 'number' : 'text'}
                                    meta={textField.meta}
                                />
                            </div>
                        );
                    } else if (field.type === FieldTypes.note) {
                        const noteField: FormNoteField = field as FormNoteField;
                        return (
                            <div className={styles.field} key={index}>
                                <TextField
                                    id={noteField.id}
                                    placeholder={noteField.placeholder}
                                    label={noteField.label}
                                    autoComplete="off"
                                    multiline
                                    style={noteField.style}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
                                        noteField.onChange(index, e.target.value);
                                    }}
                                    meta={noteField.meta}
                                />
                            </div>
                        );
                    }
                })}
            </div>
            <div className={styles.submit}>
                <Button onClick={submit.onSubmit}>
                    <Icon name={submit.icon} title={submit.title} color="white"></Icon>
                    {submit.title}
                </Button>
            </div>
        </div>
    );
};