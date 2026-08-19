import type { CountryConfig } from "../config/countries";

export interface CurrencyFormatInfo {
    currency: string;
    currencySymbol: string;
    currencyPosition: "prefix" | "suffix";
    currencySpacing: string;
}

export const getCurrencyFormatInfo = (
    country: CountryConfig
): CurrencyFormatInfo => {
    const formatter = new Intl.NumberFormat(
        country.locale,
        {
            style: "currency",
            currency: country.currency,
        }
    );

    const parts = formatter.formatToParts(1234.56);

    const currencyIndex = parts.findIndex(
        (part) => part.type === "currency"
    );

    const integerIndex = parts.findIndex(
        (part) => part.type === "integer"
    );

    const currencyPart =
        parts.find(
            (part) => part.type === "currency"
        )?.value ?? country.currency;

    const currencyPosition =
        currencyIndex < integerIndex
            ? "prefix"
            : "suffix";

    let currencySpacing = "";

    if (currencyPosition === "prefix") {
        for (
            let index = currencyIndex + 1;
            index < integerIndex;
            index++
        ) {
            if (parts[index].type === "literal") {
                currencySpacing += parts[index].value;
            }
        }
    } else {
        for (
            let index = integerIndex + 1;
            index < currencyIndex;
            index++
        ) {
            if (parts[index].type === "literal") {
                currencySpacing += parts[index].value;
            }
        }
    }

    return {
        currency: country.currency,
        currencySymbol: currencyPart,
        currencyPosition,
        currencySpacing,
    };
};