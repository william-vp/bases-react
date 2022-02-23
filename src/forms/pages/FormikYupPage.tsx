import {useFormik} from "formik";
import * as Yup from "yup";
import '../styles/styles.css'

export const FormikYupPage = () => {
    
    const {
        values, handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Obligatorio').max(15, 'Debe tener 15 caracteres o menos'),
            lastName: Yup.string().required('Obligatorio').max(15, 'Debe tener 15 caracteres o menos'),
            email: Yup.string().email('Debe ser un email válido').required('Obligatorio')
        })
    });
    
    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input{...getFieldProps('firstName')} type="text"/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input {...getFieldProps('lastName')} type="text"/>
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input {...getFieldProps('email')} type="email"/>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}