import type { Calculator } from "./calculator.types";

export const calculators: Calculator[] = [
    {
        id: "simple-interest",
        name: "Simple Interest",
        category: "Financial",
        description:
            "Calculate simple interest and total amount based on principal, rate, and time.",
        path: "/calculators/simple-interest",
        keywords: [
            "interest",
            "simple interest",
            "investment",
            "principal",
            "rate",
            "time",
        ]
    },

    // {
    //     id: "compound-interest",
    //     name: "Compound Interest",
    //     category: "Financial",
    //     description:
    //         "Calculate compound interest and total amount.",
    //     path: "/calculators/compound-interest",
    // },

    // {
    //     id: "emi",
    //     name: "EMI Calculator",
    //     category: "Financial",
    //     description:
    //         "Calculate monthly loan EMI and total interest.",
    //     path: "/calculators/emi",
    // },

    // {
    //     id: "percentage",
    //     name: "Percentage",
    //     category: "Math",
    //     description:
    //         "Calculate percentages quickly.",
    //     path: "/calculators/percentage",
    // },
];