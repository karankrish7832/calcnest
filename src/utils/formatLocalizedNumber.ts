export const formatLocalizedNumber = (
    value: string,
    locale: string
): string => {
    if (!value) {
        return "";
    }

    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) {
        return value;
    }

    return new Intl.NumberFormat(locale, {
        useGrouping: true,
        maximumFractionDigits: 20,
    }).format(numericValue);
};