import type { InputHTMLAttributes } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    prefix?: string;
    suffix?: string;
}

const InputField = ({
    label,
    error,
    prefix,
    suffix,
    id,
    ...inputProps
}: InputFieldProps) => {
    return (
        <div className={styles.field}>
            <label
                className={styles.label}
                htmlFor={id}
            >
                {label}
            </label>

            <div
                className={`${styles.inputWrapper} ${
                    error ? styles.inputWrapperError : ""
                }`}
            >
               {prefix && (
                    <span
                        className={`${styles.affix} ${styles.prefixAffix}`}
                    >
                        {prefix}
                    </span>
                )}

                <input
                    id={id}
                    className={styles.input}
                    {...inputProps}
                />

                {suffix && (
                    <span className={styles.affix}>
                        {suffix}
                    </span>
                )}
            </div>

            {error && (
                <p
                    className={styles.error}
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;