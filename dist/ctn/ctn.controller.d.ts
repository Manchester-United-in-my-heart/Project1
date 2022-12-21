import { ContainerServices } from "./ctn.services";
import { Element, Query } from "./ModulesFile";
export declare class ContainerController {
    private readonly appService;
    constructor(appService: ContainerServices);
    getHello(): string;
    getElement(id: string): Element;
    postPool(body: Element): string;
    postQuery1(body: Query): String | import("./ModulesFile").QuerySolution;
    postQuery2(body: Query): String | import("./ModulesFile").QuerySolution;
}
