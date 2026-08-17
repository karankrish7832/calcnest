import { useTranslation } from "react-i18next";

import styles from "./SimpleInterestExplanation.module.css";

const SimpleInterestExplanation = () => {
    const { t } = useTranslation();

    return (
        <article className={styles.explanation}>
            <h2>
                {t(
                    "calculators.simpleInterest.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.simpleInterest.explanation.formulaTitle"
                )}
            </h3>

            <p className={styles.formula}>
                {t(
                    "calculators.simpleInterest.explanation.formula"
                )}
            </p>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.where"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.simpleInterest.explanation.principal"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.simpleInterest.explanation.rate"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.simpleInterest.explanation.time"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.simpleInterest.explanation.simpleInterest"
                    )}
                </li>
            </ul>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.totalAmountIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.simpleInterest.explanation.totalAmountFormula"
                )}
            </p>

            <h3>
                {t(
                    "calculators.simpleInterest.explanation.exampleTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.exampleIntro"
                )}
            </p>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.exampleFormulaIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.simpleInterest.explanation.exampleFormula"
                )}
            </p>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.exampleInterest"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.simpleInterest.explanation.exampleTotal"
                )}
            </p>

            <h3>
                {t(
                    "calculators.simpleInterest.explanation.stepsTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.simpleInterest.explanation.step1"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.simpleInterest.explanation.step2"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.simpleInterest.explanation.step3"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.simpleInterest.explanation.step4"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.simpleInterest.explanation.step5"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.simpleInterest.explanation.faqTitle"
                )}
            </h3>

            <h4>
                {t(
                    "calculators.simpleInterest.explanation.faq1Question"
                )}
            </h4>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.faq1Answer"
                )}
            </p>

            <h4>
                {t(
                    "calculators.simpleInterest.explanation.faq2Question"
                )}
            </h4>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.faq2Answer"
                )}
            </p>

            <h4>
                {t(
                    "calculators.simpleInterest.explanation.faq3Question"
                )}
            </h4>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.faq3Answer"
                )}
            </p>

            <h4>
                {t(
                    "calculators.simpleInterest.explanation.faq4Question"
                )}
            </h4>

            <p>
                {t(
                    "calculators.simpleInterest.explanation.faq4Answer"
                )}
            </p>
        </article>
    );
};

export default SimpleInterestExplanation;