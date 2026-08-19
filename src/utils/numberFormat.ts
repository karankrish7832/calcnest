export interface NumberFormatInfo {
    decimalSeparator: string;
    groupSeparator: string;
    numberingSystem: string;
}

export const getNumberFormatInfo = (
    locale: string
): NumberFormatInfo => {
    const formatter = new Intl.NumberFormat(locale);

    const parts = formatter.formatToParts(
        1234567.89
    );

    const decimalSeparator =
        parts.find(
            (part) => part.type === "decimal"
        )?.value ?? ".";

    const groupSeparator =
        parts.find(
            (part) => part.type === "group"
        )?.value ?? ",";

    const numberingSystem =
        formatter.resolvedOptions().numberingSystem;

    return {
        decimalSeparator,
        groupSeparator,
        numberingSystem,
    };
};