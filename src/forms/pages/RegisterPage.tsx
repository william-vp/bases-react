import {FormEvent} from "react";
import '../styles/styles.css'
import {useForm} from "../hooks/useForm";

export const RegisterPage = () => {
    const {
        formData, isValidEmail,
        onChangeForm, resetForm
    } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


    const {email, password, confirmPassword, name} = formData;
    return (
        <div>
            <h1>Register</h1>
            <form noValidate onSubmit={onSubmit}>
                <input type="text" name='name' value={name} onChange={onChangeForm} placeholder='Nombre'
                       className={`${name.trim().length === 0 && 'has-error'}`}/>
                {name.trim().length === 0 && <span>El nombre es obligatorio</span>}

                <input type="email" name='email' value={email} onChange={onChangeForm} placeholder='Correo'
                       className={`${!isValidEmail(email) && 'has-error'}`}/>
                {!isValidEmail(email) && <span>El email no es válido</span>}

                <input type="password" name='password' value={password} onChange={onChangeForm}
                       placeholder='Contraseña'/>
                {password.trim().length === 0 && <span>El nombre es obligatorio</span>}
                {password.trim().length < 6 && password.trim().length > 0 &&
                    <span>La contraseña debe contener al menos 6 caracteres</span>}

                <input type="password" name='confirmPassword' value={confirmPassword} onChange={onChangeForm}
                       placeholder='Confirmar contraseña'/>
                {confirmPassword.trim().length === 0 && <span>La confirmación de la contraseña es obligatorio</span>}
                {confirmPassword.trim().length > 0 && confirmPassword.trim() !== password.trim() && <span>Las contraseñas deben ser iguales</span>}

                <button>Create</button>
                <button type={"reset"} onClick={resetForm}>Reset</button>
            </form>
        </div>
    );
}