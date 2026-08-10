export interface SimpleInterestForm {
    principal: string;
    rate: string;
    time: string;
}

export interface SimpleInterestResult {
    interest: number;
    totalAmount: number;
}