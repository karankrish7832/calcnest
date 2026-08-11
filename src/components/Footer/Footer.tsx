import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © {currentYear} CalcNest. All rights reserved.
                </p>

                <nav className={styles.links}>
                    <Link to="/privacy">
                        Privacy Policy
                    </Link>

                    <Link to="/terms">
                        Terms of Use
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;