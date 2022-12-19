import { Element, Query } from './ModulesFile';
export declare class ContainerServices {
    Storage: Element[];
    getHello(): string;
    getElement(s: string): Element;
    postElement(element: Element): string;
    Calculate(query: Query): any;
}
