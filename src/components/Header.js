import { useNavigate, useLocation } from "react-router-dom"
import useLanguage from '../hooks/useLanguage'
import styles from '../styles/Header.module.css'

export default function Header() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { language, toggleLanguage, t } = useLanguage()

    const scrollToFooter = () => {
        const footer = document.querySelector('footer')
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' })
        }
    }

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
                    {t('header.work')}
                </button>
                <button
                    className={`${styles.nav_link} ${isActive('/about') ? styles.nav_link_active : ''}`}
                    onClick={() => navigate('/about')}
                >
                    {t('header.about')}
                </button>
                <button
                    className={styles.contact_link}
                    onClick={scrollToFooter}
                >
                    {t('header.contact')}
                </button>
                <button
                    className={styles.language_toggle}
                    onClick={toggleLanguage}
                    title={`Switch to ${language === 'fr' ? 'English' : 'Français'}`}
                >
                    {language.toUpperCase()}
                </button>
            </nav>
        </header>
    )
}
