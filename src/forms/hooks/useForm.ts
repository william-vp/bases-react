import {ChangeEvent, FormEvent, useState} from "react";

const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const useForm = <T>(initialState: T) => {
    const [formData, setFormData] = useState(initialState)

    const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const resetForm = () => {
        setFormData(initialState)
    }

    return {
        formData, isValidEmail,
        onChangeForm, resetForm
    }
}