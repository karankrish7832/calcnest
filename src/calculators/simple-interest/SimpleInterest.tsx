import { useState } from "react";

import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";

import SimpleInterestExplanation from "./SimpleInterestExplanation";

import type {
    SimpleInterestForm,
    SimpleInterestResult,
} from "./simpleInterest.types";

import { calculateSimpleInterest } from "./simpleInterest.utils";
import {
    validateSimpleInterest,
    type SimpleInterestErrors,
} from "./simpleInterest.validation";
import { formatCurrency } from "../../utils/formatCurrency";

import styles from "./SimpleInterest.module.css";

const initialValues: SimpleInterestForm = {
    principal: "",
    rate: "",
    time: "",
};

const SimpleInterest = () => {
    const [values, setValues] =
        useState<SimpleInterestForm>(initialValues);

    const [errors, setErrors] =
        useState<SimpleInterestErrors>({});

    const [result, setResult] =
        useState<SimpleInterestResult | null>(null);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setValues((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: undefined,
        }));
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const validationErrors =
            validateSimpleInterest(values);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setResult(null);
            return;
        }

        const calculationResult =
            calculateSimpleInterest(values);

        setResult(calculationResult);
    };

    return (
        <div className={styles.page}>
            <section className={styles.calculator}>
                <div className={styles.header}>
                    <h1>Simple Interest Calculator</h1>

                    <p>
                        Calculate simple interest and total
                        amount based on principal, interest
                        rate, and time.
                    </p>
                </div>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <InputField
                        id="principal"
                        name="principal"
                        label="Principal Amount"
                        type="number"
                        min="0"
                        step="any"
                        placeholder="Enter amount"
                        prefix="₹"
                        value={values.principal}
                        onChange={handleChange}
                        error={errors.principal}
                    />

                    <InputField
                        id="rate"
                        name="rate"
                        label="Interest Rate"
                        type="number"
                        min="0"
                        step="any"
                        placeholder="Enter rate"
                        suffix="%"
                        value={values.rate}
                        onChange={handleChange}
                        error={errors.rate}
                    />

                    <InputField
                        id="time"
                        name="time"
                        label="Time Period"
                        type="number"
                        min="0"
                        step="any"
                        placeholder="Enter years"
                        suffix="years"
                        value={values.time}
                        onChange={handleChange}
                        error={errors.time}
                    />

                    <button
                        className={styles.calculateButton}
                        type="submit"
                    >
                        Calculate Interest
                    </button>
                </form>

                {result && (
                    <ResultCard
                    results={[
                        {
                            label: "Simple Interest",
                            value: formatCurrency(result.interest),
                        },
                        {
                            label: "Total Amount",
                            value: formatCurrency(result.totalAmount),
                        },
                    ]}
                />
                )}
            </section>

            <SimpleInterestExplanation />
        </div>
    );
};

export default SimpleInterest;