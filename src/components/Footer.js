import useLanguage from '../hooks/useLanguage';
import "../styles/Footer.css";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p className="footer-name">Timothée Baudequin</p>
                    <p className="footer-desc">
                        {t('footer.description')}
                    </p>
                </div>

                <div className="footer-center">
                    <a href="mailto:timotheebaudequin@gmail.com">timotheebaudequin@gmail.com</a>
                    <a href="https://github.com/PampX">GitHub</a>
                    <a href="https://www.linkedin.com/in/timothee-baudequin/">LinkedIn</a>
                    <a href="https://www.instagram.com/hec.torjunior">Instagram</a>
                    <a href="https://www.instagram.com/hec.torjunior3D">Instagram3D</a>

                </div>

                <div className="footer-right">
                    <h2>{"<TB/>"}</h2>
                    <p>{t('footer.copyright')} {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}
