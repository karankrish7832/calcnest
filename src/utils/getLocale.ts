export const getLocale = (
    language: string,
    countryCode: string
): string => {
    return `${language}-${countryCode}`;
};