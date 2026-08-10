import { Link } from "react-router-dom";
import logo from "../../assets/images/calcnest-logo.svg";
import styles from "./Header.module.css";

interface HeaderProps {
    onLogoClick: () => void;
}

const Header = ({
    onLogoClick,
}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link
                    to="/"
                    className={styles.logoLink}
                    aria-label="CalcNest home"
                    onClick={onLogoClick}
                >
                    <img
                        src={logo}
                        alt="CalcNest"
                        className={styles.logo}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;