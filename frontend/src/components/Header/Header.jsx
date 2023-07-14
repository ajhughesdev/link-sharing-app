import { ReactComponent as Logo } from './../../assets/logo-devlinks-large.svg'
import css from './header.module.css'

const Header = () => {
    return (
        <header className={css.header}>
            <Logo width={183} height={40} />
        </header>
    )
}

export default Header