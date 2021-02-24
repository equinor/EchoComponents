import * as _ from 'lodash';
import React, { useState } from 'react';
import { FormGenerator, FormNoteField, FormTextField } from '../../../src/structure/formGenerator/FormGenerator';
import { FormGeneratorWrapperProps } from './FormGenerator.stories';

const FormGeneratorWrapper: React.FC<FormGeneratorWrapperProps> = ({
    width,
    fields,
    submit
}: FormGeneratorWrapperProps) => {
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
            <FormGenerator widthStyle={width} fields={fs} submit={submit}></FormGenerator>
        </div>
    );
};

export default FormGeneratorWrapper;
