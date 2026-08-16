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
                    These values are not currently stored in a
                    personal account or used to identify you.
                </p>

                <p>
                    When you visit CalcNestHub, certain technical
                    and usage information may be collected through
                    third-party services, as described below.
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
                <h2>Google Analytics</h2>

                <p>
                    CalcNestHub uses Google Analytics, a web
                    analytics service provided by Google, to
                    understand how visitors use our website and
                    to help us improve its content and functionality.
                </p>

                <p>
                    Google Analytics may collect information such as
                    pages viewed, interactions with the website,
                    browser and device information, traffic sources,
                    and approximate geographic information. Google
                    Analytics may use cookies or similar technologies
                    to collect this information.
                </p>

                <p>
                    The information collected through Google Analytics
                    is used for website analytics, performance
                    measurement, and understanding visitor
                    engagement. CalcNestHub does not use Google
                    Analytics to intentionally collect information
                    that directly identifies you.
                </p>

                <p>
                    You can learn more about how Google uses
                    information from websites that use its services
                    by visiting Google's privacy information:
                    {" "}
                    <a
                        href="https://policies.google.com/technologies/partner-sites"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        How Google uses information from sites or apps
                        that use our services
                    </a>
                    .
                </p>

                <p>
                    You can also manage or disable cookies through
                    your browser settings. Disabling cookies may
                    affect certain website functionality or analytics
                    collection.
                </p>
            </section>

            <section>
                <h2>Third-Party Services</h2>

                <p>
                    CalcNestHub uses third-party services for
                    hosting, deployment, analytics, security,
                    performance, or other infrastructure purposes.
                </p>

                <p>
                    These services may process technical or usage
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