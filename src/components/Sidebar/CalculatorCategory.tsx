import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import type { Calculator } from "../../calculators/calculator.types";
import styles from "./CalculatorCategory.module.css";

interface CalculatorCategoryProps {
    name: string;
    calculators: Calculator[];
    isSearching: boolean;
    onCalculatorClick: () => void;
}

const CalculatorCategory = ({
    name,
    calculators,
    isSearching,
    onCalculatorClick,
}: CalculatorCategoryProps) => {

    const location = useLocation();
    const hasActiveCalculator = calculators.some(calculator => calculator.path === location.pathname);
    const [isOpen, setIsOpen] = useState(hasActiveCalculator);
    const [wasSearchOpened, setWasSearchOpened] = useState(false);

    useEffect(() => {
        if (hasActiveCalculator) {
            setIsOpen(true);
            return;
        }

        if (isSearching && !wasSearchOpened) {
            setIsOpen(true);
            setWasSearchOpened(true);
        }

        if (!isSearching) {
            setWasSearchOpened(false);
        }
    }, [
        hasActiveCalculator,
        isSearching,
        wasSearchOpened,
    ]);

    const handleToggle = () => {
        setIsOpen((current) => !current);
    };

    return (
        <section className={styles.category}>
            <button
                className={styles.categoryButton}
                type="button"
                onClick={handleToggle}
            >
                <span>{name}</span>

                <span className={styles.arrow}>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>

            {isOpen && (
                <div className={styles.calculatorList}>
                    {calculators.map((calculator) => (
                        <NavLink
                            key={calculator.id}
                            to={calculator.path}
                            onClick={onCalculatorClick}
                            className={({ isActive }) =>
                                `${styles.calculatorLink} ${
                                    isActive
                                        ? styles.active
                                        : ""
                                }`
                            }
                        >
                            {calculator.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CalculatorCategory;