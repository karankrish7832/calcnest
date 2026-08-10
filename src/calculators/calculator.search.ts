import type { Calculator } from "./calculator.types";

export const searchCalculators = (
    calculators: Calculator[],
    searchTerm: string
): Calculator[] => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
        return calculators;
    }

    return calculators.filter((calculator) => {
        const searchableText = [
            calculator.name,
            calculator.category,
            calculator.description,
            ...calculator.keywords,
        ].join(" ").toLowerCase();

        return searchableText.includes(term);
    });
};