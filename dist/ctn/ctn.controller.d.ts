import { ContainerServices } from "./ctn.services";
import { Element, Query } from "./ModulesFile";
export declare class ContainerController {
    private readonly appService;
    constructor(appService: ContainerServices);
    getHello(): string;
    getElement(id: string): Element;
    create1(body: Element): string;
    create2(body: Query): number | "notFound";
}
