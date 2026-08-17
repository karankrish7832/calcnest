export type CalculatorCategory =
    | "Financial"
    | "Math"
    | "Health"
    | "Everyday";

export type CalculatorId =
    | "simple-interest";

export interface Calculator {
    id: CalculatorId;
    category: CalculatorCategory;
    path: string;
    translationKey: string;
}