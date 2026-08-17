import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Terms.module.css";

const Terms = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("terms.title")} – CalcNestHub`;
    }, [t]);

    return (
        <article className={styles.page}>
            <h1>{t("terms.title")}</h1>

            <p className={styles.updated}>
                {t("terms.lastUpdated")}
            </p>

            <section>
                <h2>
                    {t("terms.acceptanceOfTerms.title")}
                </h2>

                <p>
                    {t(
                        "terms.acceptanceOfTerms.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t("terms.useOfCalculators.title")}
                </h2>

                <p>
                    {t(
                        "terms.useOfCalculators.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "terms.useOfCalculators.paragraph2"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t("terms.financialInformation.title")}
                </h2>

                <p>
                    {t(
                        "terms.financialInformation.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "terms.financialInformation.paragraph2"
                    )}
                </p>
            </section>

            <section>
                <h2>{t("terms.accuracy.title")}</h2>

                <p>
                    {t("terms.accuracy.paragraph")}
                </p>
            </section>

            <section>
                <h2>{t("terms.availability.title")}</h2>

                <p>
                    {t("terms.availability.paragraph")}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.limitationOfLiability.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.limitationOfLiability.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t("terms.changesToTerms.title")}
                </h2>

                <p>
                    {t("terms.changesToTerms.paragraph")}
                </p>
            </section>
        </article>
    );
};

export default Terms;