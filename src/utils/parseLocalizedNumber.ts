import { getNumberFormatInfo } from "./numberFormat";
import { getDigitMap } from "./numberDigits";

export const parseLocalizedNumber = (
    value: string,
    locale: string
): string => {
    if (!value) {
        return "";
    }

    const {
        decimalSeparator,
        groupSeparator,
    } = getNumberFormatInfo(locale);

    const { toLatin } = getDigitMap(locale);

    let normalized = [...value]
        .map((character) => {
            return toLatin.get(character) ?? character;
        })
        .join("");

    normalized = normalized
        .split(groupSeparator)
        .join("");

    normalized = normalized.replace(
        decimalSeparator,
        "."
    );

    return normalized;
};