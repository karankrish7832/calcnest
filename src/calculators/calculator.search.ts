import i18n from "../i18n/i18n";
import type { Calculator } from "./calculator.types";

export const searchCalculators = (
    calculators: Calculator[],
    searchTerm: string,
    language: string
): Calculator[] => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
        return calculators;
    }

    return calculators.filter((calculator) => {
        const translatedName = i18n.t(
            `${calculator.translationKey}.name`,
            { lng: language }
        );

        const translatedDescription = i18n.t(
            `${calculator.translationKey}.description`,
            { lng: language }
        );

        const translatedCategory = i18n.t(
            `categories.${calculator.category.toLowerCase()}`,
            { lng: language }
        );

        const keywords = i18n.t(
            `${calculator.translationKey}.keywords`,
            {
                lng: language,
                returnObjects: true,
            }
        ) as string[];

        const searchableText = [
            translatedName,
            translatedDescription,
            translatedCategory,
            ...keywords,
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(term);
    });
};