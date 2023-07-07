import { Link } from 'react-router-dom'
import css from './login.module.css'
import TextInput from '../TextInput/TextInput'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const formElement = e.target
        const isValid = formElement.checkValidity()

        if (isValid) {
            formElement.reset()
        }
    }

    return (
        <div className='container'>
            <section className={css.title}>
                <h1 className={css.heading}>Login</h1>
                <p className={css.desc}>
                    Add your details below to get back into the app
                </p>
            </section>
            <section className={css['sign-in']}>
                <form noValidate className={css.form} onSubmit={handleSubmit}>
                    <TextInput type='email' label='Email address' id='email' placeholder='e.g. alex@email.com' errorText="Can't be empty" />
                    <TextInput type='password' label='Password' id='password' placeholder='Enter your password' errorText='Please check again' />
                    <button className={css.primary} type='submit'>Login</button>
                </form>
                <div className={css.footer}>
                    <p>Don't have an account?</p>
                    <Link to='/create-account'>Create account</Link>
                </div>
            </section >
        </div >
    )
}

export default Login