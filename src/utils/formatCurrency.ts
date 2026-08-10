export const formatCurrency = (
    value: number
): string => {
    return value.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    });
};