export declare class Element {
    poolId: string;
    poolValue: number[];
    constructor(poolId: string, poolValue: number[]);
}
export declare class Query {
    poolId: string;
    percentile: number;
}
export declare class QuerySolution {
    count: number;
    result: number;
    constructor(count: number, result: number);
}
