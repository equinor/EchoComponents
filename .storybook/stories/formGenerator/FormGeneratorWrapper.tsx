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

    function setValue(value: string) {
        console.log('Value', value);
    }

    return (
        <div className={'DisciplineListControl'}>
            <FormGenerator widthStyle={width} fields={fields} submit={submit}></FormGenerator>
        </div>
    );
};

export default FormGeneratorWrapper;
