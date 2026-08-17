import type { SimpleInterestForm } from "./simpleInterest.types";

export interface SimpleInterestErrors {
    principal?: string;
    rate?: string;
    time?: string;
}

export const validateSimpleInterest = (
    values: SimpleInterestForm
): SimpleInterestErrors => {
    const errors: SimpleInterestErrors = {};

    const principal = Number(values.principal);
    const rate = Number(values.rate);
    const time = Number(values.time);

    if (!values.principal) {
        errors.principal = "calculators.simpleInterest.validation.principalRequired";
    } else if (principal <= 0) {
        errors.principal = "calculators.simpleInterest.validation.principalGreaterThanZero";
    }

    if (!values.rate) {
        errors.rate = "calculators.simpleInterest.validation.rateRequired";
    } else if (rate < 0) {
        errors.rate = "calculators.simpleInterest.validation.rateNotNegative";
    }

    if (!values.time) {
        errors.time = "calculators.simpleInterest.validation.timeRequired";
    } else if (time <= 0) {
        errors.time = "calculators.simpleInterest.validation.timeGreaterThanZero";
    }

    return errors;
};