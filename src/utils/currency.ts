import type { CountryConfig } from "../config/countries";

export const formatCurrency = (
    value: number,
    country: CountryConfig,
    locale: string
): string => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: country.currency,
    }).format(value);
};