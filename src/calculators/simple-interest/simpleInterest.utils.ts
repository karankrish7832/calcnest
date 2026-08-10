import type {
    SimpleInterestForm,
    SimpleInterestResult,
} from "./simpleInterest.types";

export const calculateSimpleInterest = ({
    principal,
    rate,
    time,
}: SimpleInterestForm): SimpleInterestResult => {
    const principalAmount = Number(principal);
    const interestRate = Number(rate);
    const timePeriod = Number(time);

    const interest =
        (principalAmount * interestRate * timePeriod) /
        100;

    const totalAmount =
        principalAmount + interest;

    return {
        interest,
        totalAmount,
    };
};