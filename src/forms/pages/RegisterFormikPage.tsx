import {Form, Formik} from "formik";
import * as Yup from "yup";
import {MyTextInput} from "../components";
import '../styles/styles.css'

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Obligatorio').min(2, 'Debe tener 2 caracteres o más').max(15, 'Debe tener 15 caracteres o menos'),
                    email: Yup.string().email('Debe ser un email válido').required('Obligatorio'),
                    password: Yup.string().required('Obligatorio').min(6, 'Debe tener 6 caracteres o más'),
                    confirmPassword: Yup.string().required('Obligatorio').oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
                })}>
                {({handleReset}) => (
                    <Form noValidate>
                        <MyTextInput label='Nombre' type='text' placeholder='Nombre' name='name'/>
                        <MyTextInput label='Correo electrónico' type='email' placeholder='E-mail' name='email'/>
                        <MyTextInput label='Contraseña' type='password' placeholder='Contraseña' name='password'/>
                        <MyTextInput label='Confirmar contraseña' type='password' placeholder='Confirmar contraseña'
                                     name='confirmPassword'/>
                        <button type='submit'>Submit</button>
                        <button onClick={handleReset} type='button'>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
