export type CalculatorCategory =
    | "Financial"
    | "Math"
    | "Health"
    | "Everyday";

export type CalculatorId =
    | "simple-interest"
    | "compound-interest"
    | "emi"
    | "loan"
    | "sip"
    | "fd"
    | "percentage"
    | "average"
    | "bmi"
    | "age"
    | "unit-converter";

export interface Calculator {
    id: CalculatorId;
    category: CalculatorCategory;
    path: string;
    translationKey: string;
}