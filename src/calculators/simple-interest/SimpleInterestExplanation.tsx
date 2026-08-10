import styles from "./SimpleInterestExplanation.module.css";

const SimpleInterestExplanation = () => {
    return (
        <article className={styles.explanation}>
            <h2>Simple Interest Calculator</h2>

            <p>
                The Simple Interest Calculator helps you
                calculate the interest earned or paid on a
                principal amount over a specific period.
            </p>

            <h3>Simple Interest Formula</h3>

            <p className={styles.formula}>
                SI = (P × R × T) / 100
            </p>

            <p>Where:</p>

            <ul>
                <li>P = Principal amount</li>
                <li>R = Annual interest rate</li>
                <li>T = Time period in years</li>
            </ul>

            <h3>Example</h3>

            <p>
                Suppose you invest ₹1,00,000 at an annual
                interest rate of 8% for 5 years.
            </p>

            <p className={styles.formula}>
                SI = (1,00,000 × 8 × 5) / 100
            </p>

            <p>
                Simple Interest = ₹40,000
            </p>

            <p>
                Total Amount = ₹1,40,000
            </p>

            <h3>Frequently Asked Questions</h3>

            <h4>What is simple interest?</h4>

            <p>
                Simple interest is calculated only on the
                original principal amount.
            </p>

            <h4>Does simple interest compound?</h4>

            <p>
                No. Unlike compound interest, simple interest
                does not calculate interest on previously earned
                interest.
            </p>
        </article>
    );
};

export default SimpleInterestExplanation;