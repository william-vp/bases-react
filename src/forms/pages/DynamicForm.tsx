import {Form, Formik} from 'formik';
import * as Yup from "yup";
import {MyCheckbox, MySelect, MyTextInput} from "../components";
import formJson from '../data/custom-form.json';

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}
for (const input of formJson) {
    initialValues[input.name] = input.value
    let schema = Yup.string();
    if (input.validations) {
        for (const validation of input.validations) {
            if (validation.type == 'required') {
                schema = schema.required(validation.message)
            }
            if (validation.type == 'minLength') {
                schema = schema.min((validation as any).value, validation.message)
            }
            if (validation.type == 'maxLength') {
                schema = schema.max((validation as any)?.value, validation.message)
            }
            if (validation.type == 'email') {
                schema = schema.email(validation.message)
            }
        }
    }
    requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {({handleReset}) => (
                    <Form noValidate>
                        {formJson.map(({name, label, type, placeholder, options}, index) => {
                            if (type === 'text' || type === 'email' || type === 'password') {
                                return (
                                    <MyTextInput
                                        key={index} name={name}
                                        label={label} type={type as any}
                                        placeholder={placeholder}/>
                                )
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={index} name={name}
                                        label={label}>
                                        {options?.map(({id, description}) => (
                                            <option key={id} value={id}>{description}</option>
                                        ))}
                                    </MySelect>
                                )
                            } else if (type === 'checkbox') {
                                return (
                                    <MyCheckbox
                                        key={index} name={name}
                                        label={label} id={name}/>
                                )
                            }
                        })}
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}