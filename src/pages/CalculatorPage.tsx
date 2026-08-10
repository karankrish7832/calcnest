import { Suspense } from "react";
import { Navigate, useParams } from "react-router-dom";

import { calculators } from "../calculators/calculator.registry";
import { calculatorComponents } from "../calculators/calculator.components";
import CalculatorLoader from "../components/CalculatorLoader/CalculatorLoader";

const CalculatorPage = () => {
    const { calculatorId } = useParams();

    const calculator = calculators.find(
        (item) => item.id === calculatorId
    );

    if (!calculator) {
        return <Navigate to="/" replace />;
    }

    const CalculatorComponent =
        calculatorComponents[calculator.id as keyof typeof calculatorComponents];

    if (!CalculatorComponent) {
        return <Navigate to="/" replace />;
    }

    return (
        <Suspense fallback={<CalculatorLoader />}>
            <CalculatorComponent />
        </Suspense>
    );
};

export default CalculatorPage;