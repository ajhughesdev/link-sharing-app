import { Link } from 'react-router-dom'
import Header from './../Header/Header'
import TextInput from './../TextInput/TextInput'

import css from './createAccount.module.css'


const CreateAccount = () => {
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
            <Header />
            <main>
                <section className={css.title}>
                    <h1 className={css.heading}>Create account</h1>
                    <p className={css.description}>Let's get you started sharing your links!</p>
                </section>
                <section className={css["create-account"]}>
                    <form noValidate className={css.form} onSubmit={handleSubmit}>
                        <TextInput
                            type="email"
                            label="Email address"
                            id="email"
                            placeholder="e.g. alex@email.com"
                            errorText="Can't be empty"
                        />
                        <TextInput
                            type="password"
                            label="Create password"
                            id="password"
                            placeholder="At least 8 characters"
                            errorText="Please check again"
                            minLength={8}
                        />
                        <TextInput
                            type="password"
                            label="Confirm password"
                            id="password"
                            placeholder="At least 8 characters"
                            errorText="Please check again"
                            minLength={8}
                        />
                        <p className={css['password-requirement']}>Password must contain at least 8 characters</p>
                        <button className={css['primary-button']} type="submit">
                            Create new account
                        </button>
                    </form>
                    <div className={css.footer}>
                        <p>Already have an account?</p>
                        <Link to='/'>Login</Link>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CreateAccount