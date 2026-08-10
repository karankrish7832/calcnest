import { useMemo } from "react";
import { calculators } from "../../calculators/calculator.registry";
import CalculatorCategory from "./CalculatorCategory";
import { searchCalculators } from "../../calculators/calculator.search";
import styles from "./Sidebar.module.css";

interface SidebarProps {
    search: string;
    onSearchChange: (value: string) => void;
    onCalculatorClick: () => void;
}

const Sidebar = ({
    search,
    onSearchChange,
    onCalculatorClick,
}: SidebarProps) => {
    const filteredCalculators = useMemo(
        () => searchCalculators(calculators, search),
        [search]
    );

    const isSearching = search.trim().length > 0;

    const categories = [
        "Financial",
        "Math",
        "Health",
        "Everyday",
    ] as const;

    return (
        <aside className={styles.sidebar}>
            <div className={styles.searchContainer}>
                <input
                    type="search"
                    className={styles.searchInput}
                    placeholder="Search calculators..."
                    value={search}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                />
            </div>

            <nav className={styles.categories}>
                {categories.map((category) => {
                    const categoryCalculators =
                        filteredCalculators.filter(
                            (calculator) =>
                                calculator.category === category
                        );

                    if (categoryCalculators.length === 0) {
                        return null;
                    }

                    return (
                        <CalculatorCategory
                            key={category}
                            name={category}
                            calculators={categoryCalculators}
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