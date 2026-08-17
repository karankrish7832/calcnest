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
import { useTranslation } from "react-i18next";
import styles from "./SimpleInterest.module.css";

const initialValues: SimpleInterestForm = {
    principal: "",
    rate: "",
    time: "",
};

const SimpleInterest = () => {
    const { t } = useTranslation();

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
                    <h1>{t("calculators.simpleInterest.title")}</h1>

                    <p>
                        {t("calculators.simpleInterest.description")}
                    </p>
                </div>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <InputField
                        id="principal"
                        name="principal"
                        label={t("calculators.simpleInterest.principalAmount")}
                        placeholder={t("calculators.simpleInterest.enterAmount")}
                        type="number"
                        min="0"
                        step="any"
                        prefix="₹"
                        value={values.principal}
                        onChange={handleChange}
                        error={errors.principal ? t(errors.principal) : undefined}
                    />

                    <InputField
                        id="rate"
                        name="rate"
                        label={t("calculators.simpleInterest.interestRate")}
                        placeholder={t("calculators.simpleInterest.enterRate")}
                        type="number"
                        min="0"
                        step="any"
                        suffix="%"
                        value={values.rate}
                        onChange={handleChange}
                        error={errors.rate ? t(errors.rate) : undefined}
                    />

                    <InputField
                        id="time"
                        name="time"
                        label={t("calculators.simpleInterest.timePeriod")}
                        placeholder={t("calculators.simpleInterest.enterYears")}
                        type="number"
                        min="0"
                        step="any"
                        suffix="years"
                        value={values.time}
                        onChange={handleChange}
                        error={errors.time ? t(errors.time) : undefined}
                    />

                    <button
                        className={styles.calculateButton}
                        type="submit"
                    >
                        {t("calculators.simpleInterest.calculateInterest")}
                    </button>
                </form>

                {result && (
                    <ResultCard
                    results={[
                        {
                            label: t("calculators.simpleInterest.simpleInterest"),
                            value: formatCurrency(result.interest),
                        },
                        {
                            label: t("calculators.simpleInterest.totalAmount"),
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