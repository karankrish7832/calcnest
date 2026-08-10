import { lazy, type ComponentType } from "react";
import type { CalculatorId } from "./calculator.types";

export const calculatorComponents: Record<
    CalculatorId,
    ComponentType
> = {
    "simple-interest": lazy(
        () => import("./simple-interest/SimpleInterest")
    ),
};