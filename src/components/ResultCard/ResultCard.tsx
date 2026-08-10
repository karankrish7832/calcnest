import type { ReactNode } from "react";
import styles from "./ResultCard.module.css";

interface ResultItem {
    label: string;
    value: ReactNode;
}

interface ResultCardProps {
    title?: string;
    results: ResultItem[];
}

const ResultCard = ({
    title = "Result",
    results,
}: ResultCardProps) => {
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.results}>
                {results.map((result) => (
                    <div
                        key={result.label}
                        className={styles.resultRow}
                    >
                        <span className={styles.label}>
                            {result.label}
                        </span>

                        <span className={styles.value}>
                            {result.value}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResultCard;