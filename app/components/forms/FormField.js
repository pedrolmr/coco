import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, width, ...otherProps }) {
    const {setFieldValue, setFieldTouched, errors, touched, values} = useFormikContext();
    return (
        <>
            <AppTextInput 
              onBlur={() => setFieldTouched(name)}
              onChangeText={text => setFieldValue(name, text)}
              value={values[name]}
              width={width}
              {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>  
        </>
    )
}
