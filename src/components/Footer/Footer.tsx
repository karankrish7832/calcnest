import styles from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                © {currentYear} CalcNest. All rights reserved.
            </p>

            <p className={styles.description}>
                Free online calculators for everyday needs.
            </p>
        </footer>
    );
};

export default Footer;