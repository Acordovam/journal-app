import React, {useEffect, useMemo, useState} from 'react';

const useForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        return () => {
            createValidators();
        };
    }, [formState]);
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            // @ts-ignore
            if (formValidation[formValue] != null) {
                return false;
            }
        }
        return true
    }, [formValidation]);
    const onInputChange = ({target}: any) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onResetForm = () => {
        setFormState(initialForm)
    }
    const createValidators = () => {
        const formCheckedValues = {}
        for (const formField of Object.keys(formValidations)){
            // @ts-ignore
            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField]
            // @ts-ignore
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        }
        setFormValidation(formCheckedValues)
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    };
};

export default useForm;