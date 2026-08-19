export interface DigitMap {
    toLatin: Map<string, string>;
    fromLatin: Map<string, string>;
}

export const getDigitMap = (
    locale: string
): DigitMap => {
    const formatter = new Intl.NumberFormat(
        locale,
        {
            useGrouping: false,
        }
    );

    const parts = formatter.formatToParts(9876543210);

    const formattedDigits = parts
        .filter((part) => part.type === "integer")
        .map((part) => part.value)
        .join("");

    const latinDigits = "9876543210";

    const toLatin = new Map<string, string>();
    const fromLatin = new Map<string, string>();

    [...formattedDigits].forEach(
        (digit, index) => {
            const latinDigit = latinDigits[index];

            toLatin.set(digit, latinDigit);
            fromLatin.set(latinDigit, digit);
        }
    );

    return {
        toLatin,
        fromLatin,
    };
};