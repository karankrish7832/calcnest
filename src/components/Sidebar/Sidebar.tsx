import { useMemo } from "react";
import { calculators } from "../../calculators/calculator.registry";
import CalculatorCategory from "./CalculatorCategory";
import { searchCalculators } from "../../calculators/calculator.search";
import { useTranslation } from "react-i18next";
import CountrySelector from "../CountrySelector/CountrySelector";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./Sidebar.module.css";

interface SidebarProps {
    search: string;
    onSearchChange: (value: string) => void;
    onCalculatorClick: () => void;
    isOpen: boolean;
}

const Sidebar = ({
    search,
    onSearchChange,
    onCalculatorClick,
    isOpen,
}: SidebarProps) => {
    const { t, i18n } = useTranslation();

    const filteredCalculators = useMemo(
        () =>
            searchCalculators(
                calculators,
                search,
                i18n.language
            ),
        [search, i18n.language]
    );

    const isSearching =
        search.trim().length > 0;

    const categories = [
        "Financial",
        "Math",
        "Health",
        "Everyday",
    ] as const;

    return (
        <aside
            className={`${styles.sidebar} ${
                isOpen ? styles.open : ""
            }`}
        >
            {/* Fixed controls */}
            <div className={styles.controls}>
                <div className={styles.selectors}>
                    <CountrySelector />
                    <LanguageSelector />
                </div>

                <div className={styles.searchContainer}>
                    <input
                        type="search"
                        className={styles.searchInput}
                        placeholder={t(
                            "sidebar.searchPlaceholder"
                        )}
                        value={search}
                        onChange={(event) =>
                            onSearchChange(
                                event.target.value
                            )
                        }
                    />
                </div>
            </div>

            {/* Only this section scrolls */}
            <nav className={styles.categories}>
                {categories.map((category) => {
                    const categoryCalculators =
                        filteredCalculators.filter(
                            (calculator) =>
                                calculator.category ===
                                category
                        );

                    if (
                        categoryCalculators.length ===
                        0
                    ) {
                        return null;
                    }

                    return (
                        <CalculatorCategory
                            key={category}
                            name={category}
                            calculators={
                                categoryCalculators
                            }
                            isSearching={isSearching}
                            onCalculatorClick={
                                onCalculatorClick
                            }
                        />
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;