import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import '../styles/styles.css'

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>
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
                        <label htmlFor="firstName">First Name</label>
                        <Field name='firstName' type='text'/>
                        <ErrorMessage name='firstName' component='span'/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name='lastName' type='text'/>
                        <ErrorMessage name='lastName' component='span'/>

                        <label htmlFor="email">Email</label>
                        <Field name='email' type='text'/>
                        <ErrorMessage name='email' component='span'/>

                        <label htmlFor="terms">
                            <Field name='terms' id='terms' type='checkbox'/>
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component='span'/>

                        <label htmlFor="jobType">Job type</label>
                        <Field name='jobType' as='select'>
                            <option value=''>Select a job type</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>Senior</option>
                            <option value='it-jr'>Junior</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span'/>

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}