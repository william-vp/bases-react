import {ErrorMessage, useField} from "formik";

interface Props {
    label: string;
    placeholder?: string;
    name: string;

    [x: string]: any;
}

export const MySelect = ({label, ...props}: Props) => {
    const [field] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <select {...field} {...props}/>
            <ErrorMessage name={props.name} component="span"/>
        </>
    );
}