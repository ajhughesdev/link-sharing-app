import { Link } from 'react-router-dom'
import css from './login.module.css'

const Login = () => {
    return (
        <div className='container'>
            <section className={css.title}>
                <h1 className={css.heading}>Login</h1>
                <p className={css.desc}>
                    Add your details below to get back into the app
                </p>
            </section>
            <section className={css['sign-in']}>
                <form>
                    <label className={css.label} htmlFor='email'>Email address <input className={css.email} type='email' id='email' placeholder='e.g. alex@email.com' /></label>
                    <label className={css.label} htmlFor='password'>Password <input className={css.password} type='password' id='password' placeholder='Enter your password' /></label>
                    <button className={`btn ${css.primary}`}>Login</button>
                </form>
                <div className={css['footer']}>
                    <p>Don't have an account?</p>
                    <Link to='/create-account'>Create account</Link>
                </div>
            </section >
        </div >
    )
}

export default Login