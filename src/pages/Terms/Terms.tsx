import styles from "./Terms.module.css";

const Terms = () => {
    return (
        <article className={styles.page}>
            <h1>Terms of Use</h1>

            <p className={styles.updated}>
                Last updated: August 2026
            </p>

            <section>
                <h2>Acceptance of Terms</h2>

                <p>
                    By accessing or using CalcNestHub, you agree
                    to use the website responsibly and in
                    accordance with these Terms of Use.
                </p>
            </section>

            <section>
                <h2>Use of Calculators</h2>

                <p>
                    CalcNestHub provides calculators for general
                    informational and educational purposes.
                </p>

                <p>
                    Calculator results are estimates based on
                    the information entered by the user. Results
                    may vary depending on the assumptions,
                    formulas, rates, and other inputs used.
                </p>
            </section>

            <section>
                <h2>Financial Information</h2>

                <p>
                    Some CalcNestHub calculators may relate to
                    financial topics such as interest, loans,
                    investments, or savings.
                </p>

                <p>
                    The information and calculations provided by
                    CalcNestHub do not constitute financial, legal,
                    tax, or investment advice. You should consult
                    an appropriately qualified professional before
                    making financial decisions.
                </p>
            </section>

            <section>
                <h2>Accuracy</h2>

                <p>
                    We aim to provide accurate calculations and
                    useful information, but we do not guarantee
                    that all results will always be complete,
                    accurate, or suitable for a particular
                    purpose.
                </p>
            </section>

            <section>
                <h2>Availability</h2>

                <p>
                    We may modify, update, suspend, or discontinue
                    parts of CalcNestHub at any time without prior
                    notice.
                </p>
            </section>

            <section>
                <h2>Limitation of Liability</h2>

                <p>
                    To the extent permitted by applicable law,
                    CalcNestHub and its contributors are not
                    responsible for losses or damages resulting
                    from reliance on calculator results or
                    information provided through the website.
                </p>
            </section>

            <section>
                <h2>Changes to These Terms</h2>

                <p>
                    These Terms of Use may be updated from time
                    to time. Changes will be published on this
                    page.
                </p>
            </section>
        </article>
    );
};

export default Terms;