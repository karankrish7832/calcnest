import { Link } from "react-router-dom";
import type { Calculator } from "../../calculators/calculator.types";

interface CalculatorCardProps {
    calculator: Calculator;
}

const CalculatorCard = ({
    calculator,
}: CalculatorCardProps) => {
    return (
        <article>
            <h3>{calculator.name}</h3>

            <p>{calculator.description}</p>

            <Link to={calculator.path}>
                Open Calculator
            </Link>
        </article>
    );
};

export default CalculatorCard;