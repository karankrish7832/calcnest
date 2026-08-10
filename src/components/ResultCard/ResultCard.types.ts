export interface ResultItem {
    label: string;
    value: number;
}

export interface ResultCardProps {
    title: string;
    items: ResultItem[];
}