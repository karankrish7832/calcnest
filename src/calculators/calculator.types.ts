export type CalculatorCategory =
    | "Financial"
    | "Math"
    | "Health"
    | "Everyday";

export type CalculatorId =
    | "simple-interest";

export interface Calculator {
    id: CalculatorId;
    name: string;
    category: CalculatorCategory;
    description: string;
    path: string;
    keywords: string[];
}