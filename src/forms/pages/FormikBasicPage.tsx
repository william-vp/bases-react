import {FormikErrors, useFormik} from "formik";
import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!firstName) {
            errors.firstName = 'Required';
        } else if (firstName.length > 15) {
            errors.lastName = 'Must be 15 characters or less';
        } 
        
        if (!lastName) {
            errors.lastName = 'Required';
        } else if (lastName.length > 10) {
            errors.lastName = 'Must be 10 characters or less';
        } 
        
        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors
    }

    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validate
    });

    const {firstName, lastName, email} = values;

    return (
        <div>
            <h1>Formik Basic</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="First Name"/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Last Name"/>
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    placeholder="Email"/>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}