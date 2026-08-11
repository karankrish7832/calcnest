import styles from "./SimpleInterestExplanation.module.css";

const SimpleInterestExplanation = () => {
    return ( 
        <article className={styles.explanation}> 
            <h2>How Simple Interest Is Calculated</h2>

            <p>
                Simple interest is a method of calculating interest
                based only on the original principal amount. It is
                commonly used for short-term loans, investments,
                deposits, and other financial calculations where
                interest does not compound.
            </p>

            <p>
                This simple interest calculator calculates both the
                interest amount and the total amount based on the
                principal, annual interest rate, and time period.
            </p>

            <h3>Simple Interest Formula</h3>

            <p className={styles.formula}>
                SI = (P × R × T) / 100
            </p>

            <p>Where:</p>

            <ul>
                <li>P = Principal amount</li>
                <li>R = Annual interest rate in percent</li>
                <li>T = Time period in years</li>
                <li>SI = Simple interest</li>
            </ul>

            <p>
                After calculating the simple interest, the total
                amount can be calculated using:
            </p>

            <p className={styles.formula}>
                Total Amount = Principal + Simple Interest
            </p>

            <h3>Simple Interest Example</h3>

            <p>
                Suppose you invest ₹1,00,000 at an annual interest
                rate of 8% for 5 years.
            </p>

            <p>
                Using the simple interest formula:
            </p>

            <p className={styles.formula}>
                SI = (1,00,000 × 8 × 5) / 100
            </p>

            <p>
                Simple Interest = ₹40,000
            </p>

            <p>
                The total amount is:
            </p>

            <p className={styles.formula}>
                Total Amount = ₹1,00,000 + ₹40,000
            </p>

            <p>
                <strong>Total Amount = ₹1,40,000</strong>
            </p>

            <h3>How to Calculate Simple Interest</h3>

            <ol>
                <li>
                    Enter the original principal amount.
                </li>
                <li>
                    Enter the annual interest rate as a percentage.
                </li>
                <li>
                    Enter the time period in years.
                </li>
                <li>
                    Apply the simple interest formula to calculate
                    the interest.
                </li>
                <li>
                    Add the interest to the principal to find the
                    total amount.
                </li>
            </ol>

            <h3>Frequently Asked Questions</h3>

            <h4>What is simple interest?</h4>

            <p>
                Simple interest is interest calculated only on the
                original principal amount. The previously earned
                interest is not added to the principal for future
                interest calculations.
            </p>

            <h4>Does simple interest compound?</h4>

            <p>
                No. Simple interest does not compound. Unlike
                compound interest, interest is calculated using the
                original principal throughout the specified period.
            </p>

            <h4>What is the formula for simple interest?</h4>

            <p>
                The simple interest formula is SI = (P × R × T) / 100,
                where P is the principal, R is the annual interest
                rate, and T is the time period in years.
            </p>

            <h4>What is the difference between simple interest and compound interest?</h4>

            <p>
                Simple interest is calculated only on the original
                principal, while compound interest can be calculated
                on the principal plus previously accumulated interest.
                As a result, compound interest can grow faster over
                longer periods.
            </p>
        </article>
    );
};

export default SimpleInterestExplanation;