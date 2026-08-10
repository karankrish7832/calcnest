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
        errors.principal =
            "Principal amount is required.";
    } else if (principal <= 0) {
        errors.principal =
            "Principal amount must be greater than 0.";
    }

    if (!values.rate) {
        errors.rate =
            "Interest rate is required.";
    } else if (rate < 0) {
        errors.rate =
            "Interest rate cannot be negative.";
    }

    if (!values.time) {
        errors.time =
            "Time period is required.";
    } else if (time <= 0) {
        errors.time =
            "Time period must be greater than 0.";
    }

    return errors;
};