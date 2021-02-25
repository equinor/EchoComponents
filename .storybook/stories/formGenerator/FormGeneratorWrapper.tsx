import * as _ from 'lodash';
import React, { useState } from 'react';
import {
    FormGenerator,
    FormGeneratorProps,
    FormNoteField,
    FormTextField
} from '../../../src/structure/formGenerator/FormGenerator';

const FormGeneratorWrapper: React.FC<FormGeneratorProps> = ({ style, fields, submit }: FormGeneratorProps) => {
    const [fs, setFs] = useState<(FormTextField | FormNoteField)[]>(fields);

    for (let f of fs) {
        f.onChange = setValue;
    }

    function setValue(index: number, value: string | number) {
        const updatedFields = _.clone(fs);
        const updatedField = updatedFields[index];
        updatedField.value = value;
        setFs(updatedFields);
        console.log('Value', value, updatedFields);
    }

    return (
        <div className={'DisciplineListControl'}>
            <FormGenerator style={style} fields={fs} submit={submit}></FormGenerator>
        </div>
    );
};

export default FormGeneratorWrapper;
