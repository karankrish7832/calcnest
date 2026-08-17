import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Calculator } from "../../calculators/calculator.types";

interface CalculatorCardProps {
    calculator: Calculator;
}

const CalculatorCard = ({
    calculator,
}: CalculatorCardProps) => {
    const { t } = useTranslation();

    const calculatorName = t(
        `${calculator.translationKey}.name`
    );

    const calculatorDescription = t(
        `${calculator.translationKey}.description`
    );

    return (
        <article>
            <h3>{calculatorName}</h3>

            <p>{calculatorDescription}</p>

            <Link to={calculator.path}>
                Open Calculator
            </Link>
        </article>
    );
};

export default CalculatorCard;