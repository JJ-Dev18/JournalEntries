import  { useState } from 'react'
// custom hook se encarga de validar los formularios
export const useForm = (initialState = {}) => {
    

    const [values, setvalues] = useState(initialState);

    const reset= (newFormState = initialState) => {
        setvalues(newFormState)
    }

    const handleInputChange = ({target}) => {

        setvalues({
            ...values,
            [target.name] : target.value
        });
    }

    return [values , handleInputChange, reset]
}
