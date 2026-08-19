import { useTranslation } from "react-i18next";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import { languages } from "../../i18n/languages";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
    const { i18n, t } = useTranslation();

    const options = languages.map((language) => ({
        value: language.code,
        label: language.name,
    }));

    const handleLanguageChange = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <div className={styles.wrapper}>
            <SelectDropdown
                options={options}
                value={i18n.language}
                onChange={handleLanguageChange}
                searchable={false}
                placeholder={t("language.select")}
            />
        </div>
    );
};

export default LanguageSelector;