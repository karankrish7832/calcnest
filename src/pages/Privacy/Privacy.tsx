import styles from "./Privacy.module.css";

const Privacy = () => {
    return (
        <article className={styles.page}>
            <h1>Privacy Policy</h1>

            <p className={styles.updated}>
                Last updated: August 2026
            </p>

            <section>
                <h2>Introduction</h2>

                <p>
                    Welcome to CalcNestHub. CalcNestHub provides
                    online calculators and related information
                    to help users perform common calculations.
                </p>

                <p>
                    We respect your privacy and aim to keep our
                    website simple and transparent.
                </p>
            </section>

            <section>
                <h2>Information We Collect</h2>

                <p>
                    CalcNestHub does not currently require users to
                    create an account or provide personal
                    information to use the calculators.
                </p>

                <p>
                    Calculator values entered by you are used to
                    perform calculations within the application.
                </p>
            </section>

            <section>
                <h2>Calculator Data</h2>

                <p>
                    The values you enter into calculators are
                    processed to generate the requested results.
                    CalcNestHub does not currently provide a feature
                    for storing your calculator history in a
                    personal account.
                </p>
            </section>

            <section>
                <h2>Third-Party Services</h2>

                <p>
                    CalcNestHub may use third-party services for
                    hosting, deployment, security, performance,
                    or other infrastructure purposes.
                </p>

                <p>
                    These services may process technical
                    information according to their own privacy
                    policies.
                </p>
            </section>

            <section>
                <h2>Changes to This Policy</h2>

                <p>
                    We may update this Privacy Policy when the
                    website or its features change. Any updated
                    version will be published on this page.
                </p>
            </section>

            <section>
                <h2>Contact</h2>

                <p>
                    If you have questions about this Privacy
                    Policy, please contact the CalcNestHub team.
                </p>
            </section>
        </article>
    );
};

export default Privacy;