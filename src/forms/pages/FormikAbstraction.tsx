import {Formik, Form} from "formik";
import * as Yup from "yup";
import '../styles/styles.css'
import {MyTextInput, MySelect, MyCheckbox} from "../components";

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required('Obligatorio').max(15, 'Debe tener 15 caracteres o menos'),
                    lastName: Yup.string().required('Obligatorio').max(15, 'Debe tener 15 caracteres o menos'),
                    email: Yup.string().email('Debe ser un email válido').required('Obligatorio'),
                    terms: Yup.boolean().oneOf([true], 'Debe aceptar los términos y condiciones'),
                    jobType: Yup.string().required('Obligatorio').notOneOf(['', 'it-jr'], 'Esta opción no es válida')
                })}>
                {(formik: any) => (
                    <Form noValidate>
                        <MyTextInput label='First Name' type='text' placeholder='First name' name='firstName'/>
                        <MyTextInput label='Last Name' type='text' placeholder='Last name' name='lastName'/>
                        <MyTextInput label='Email' type='email' placeholder='Email' name='email'/>
                        <MyCheckbox label='Terms and conditions' id='terms' name='terms'/>
                        <MySelect label='Job type' name='jobType'>
                            <option value=''>Select a job type</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>Senior</option>
                            <option value='it-jr'>Junior</option>
                        </MySelect>
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}