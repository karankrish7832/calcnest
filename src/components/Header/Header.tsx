import { Link } from "react-router-dom";
import logo from "../../assets/images/calcnest-logo.svg";
import moonIcon from "../../assets/images/moon.svg";
import sunIcon from "../../assets/images/sun.svg";
import { useTheme } from "../../context/ThemeContext";
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
    const { theme, toggleTheme } = useTheme();

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

                <button
                    type="button"
                    className={`${styles.themeToggle} ${
                        theme === "dark" ? styles.dark : ""
                    }`}
                    onClick={toggleTheme}
                    aria-label={
                        theme === "light"
                            ? "Switch to dark mode"
                            : "Switch to light mode"
                    }
                >
                    <span className={styles.toggleTrack}>
                        <span className={styles.toggleIcon}>
                            <img
                                src={sunIcon}
                                alt=""
                                className={styles.sunIcon}
                            />

                            <img
                                src={moonIcon}
                                alt=""
                                className={styles.moonIcon}
                            />
                        </span>
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;