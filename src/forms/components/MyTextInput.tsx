import {ErrorMessage, useField} from "formik";

interface Props {
    label: string;
    placeholder?: string;
    name: string;
    type?: 'text' | 'email' | 'password';

    [x: string]: any;
}

export const MyTextInput = ({label, ...props}: Props) => {
    const [field] = useField(props)
    // meta.touched meta.error meta.submitError meta.dirty
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input type="text" className='text-input' {...field} {...props}/>
            <ErrorMessage name={props.name} component="span"/>
        </>
    );
}