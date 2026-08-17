import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../../i18n/languages";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
    const { i18n, t } = useTranslation();

    const handleLanguageChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <select
                className={styles.select}
                value={i18n.language}
                onChange={handleLanguageChange}
                aria-label={t("language.select")}
            >
                {languages.map((language) => (
                    <option
                        key={language.code}
                        value={language.code}
                    >
                        {language.name}
                    </option>
                ))}
            </select>

            <span className={styles.arrow}>▼</span>
        </div>
    );
};

export default LanguageSelector;