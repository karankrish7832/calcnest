import { Link } from "react-router-dom";
import logo from "../../assets/images/calcnest-logo.svg";
import styles from "./Header.module.css";

interface HeaderProps {
    onLogoClick: () => void;
    onMenuClick: () => void;
    isSidebarOpen: boolean;
}

const Header = ({
    onLogoClick,
    onMenuClick,
    isSidebarOpen,
}: HeaderProps) => {
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={onMenuClick}
                    aria-label={
                        isSidebarOpen
                            ? "Close calculator menu"
                            : "Open calculator menu"
                    }
                    aria-expanded={isSidebarOpen}
                >
                    {isSidebarOpen ? "✕" : "☰"}
                </button>

                <Link
                    to="/"
                    className={styles.logoLink}
                    aria-label="CalcNestHub home"
                    onClick={onLogoClick}
                >
                    <img
                        src={logo}
                        alt="CalcNestHub"
                        className={styles.logo}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;