import { Element, Query, QuerySolution } from "./ModulesFile";
export declare class ContainerServices {
    Storage: Element[];
    getHello(): string;
    getElement(s: string): Element;
    postElement(element: Element): string;
    Calculate1(query: Query): QuerySolution | String;
    Calculate2(query: Query): QuerySolution | String;
}
