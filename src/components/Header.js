import { useNavigate } from "react-router-dom"
import styles from '../styles/Header.module.css'

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className={styles.header_div}>
            <div className={styles.nav_div}>
                <button className={styles.nav_button} onClick={() => navigate('/')} >Home</button>
                <button className={styles.nav_button} onClick={() => navigate('/work')}>Work</button>
                <button className={styles.nav_button} onClick={() => navigate('/about')}>About</button>
            </div>
        </div>
    )
}