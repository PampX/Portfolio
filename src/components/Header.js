import { useNavigate, useLocation } from "react-router-dom"
import styles from '../styles/Header.module.css'

export default function Header() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const isActive = (path) =>
        path === '/' ? pathname === '/' : pathname.startsWith(path)

    return (
        <header className={styles.header}>
            <button className={styles.logo} onClick={() => navigate('/')}>
                {'<TB/>'}
            </button>

            <nav className={styles.nav}>
                <button
                    className={`${styles.nav_link} ${isActive('/work') ? styles.nav_link_active : ''}`}
                    onClick={() => navigate('/work')}
                >
                    Work
                </button>
                <button
                    className={`${styles.nav_link} ${isActive('/about') ? styles.nav_link_active : ''}`}
                    onClick={() => navigate('/about')}
                >
                    About
                </button>
                <a
                    href="mailto:timotheebaudequin@gmail.com"
                    className={styles.contact_link}
                >
                    Contact
                </a>
            </nav>
        </header>
    )
}
