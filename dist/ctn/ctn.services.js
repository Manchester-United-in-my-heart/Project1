"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerServices = void 0;
const common_1 = require("@nestjs/common");
const ModulesFile_1 = require("./ModulesFile");
let ContainerServices = class ContainerServices {
    constructor() {
        this.Storage = [];
    }
    getHello() {
        return this.Storage.length.toString();
    }
    getElement(s) {
        let z = this.Storage.find(item => item.poolId === s);
        if (z) {
            return z;
        }
        else
            throw new common_1.NotFoundException("Khong tim thay Pool");
    }
    postElement(element) {
        let checkElement = this.Storage.find(item => item.poolId === element.poolId);
        if (!checkElement) {
            this.Storage.push(element);
            return "Inserted";
        }
        else {
            let z = this.Storage.indexOf(checkElement);
            let newElement = new ModulesFile_1.Element(checkElement.poolId, checkElement.poolValue.concat(element.poolValue));
            ;
            this.Storage[z] = newElement;
            return "Appended";
        }
    }
    Calculate1(query) {
        let x = this.getElement(query.poolId);
        if (!x)
            return "notFound";
        x.poolValue = x.poolValue.sort((a, b) => (a - b));
        if (query.percentile <= 0)
            return new ModulesFile_1.QuerySolution(x.poolValue.length, x.poolValue[0] - 1);
        if (query.percentile >= 100)
            return new ModulesFile_1.QuerySolution(x.poolValue.length, x.poolValue[x.poolValue.length - 1] + 1);
        let n = x.poolValue.length;
        let rank = query.percentile / 100;
        let res = rank * n;
        res = Math.ceil(res);
        return new ModulesFile_1.QuerySolution(n, x.poolValue[res - 1]);
    }
    Calculate2(query) {
        let x = this.getElement(query.poolId);
        if (!x)
            return "notFound";
        x.poolValue = x.poolValue.sort((a, b) => (a - b));
        if (query.percentile <= 0)
            return new ModulesFile_1.QuerySolution(x.poolValue.length, x.poolValue[0] - 1);
        if (query.percentile >= 100)
            return new ModulesFile_1.QuerySolution(x.poolValue.length, x.poolValue[x.poolValue.length - 1] + 1);
        let n = x.poolValue.length;
        let rank = query.percentile / 100;
        let res = rank * n;
        if (Math.ceil(res) === Math.floor(res))
            return new ModulesFile_1.QuerySolution(n, x.poolValue[res]);
        res = res - 1;
        let x0 = Math.floor(res);
        let x1 = Math.ceil(res);
        let p1 = x.poolValue[x1];
        let p0 = x.poolValue[x0];
        let result = (res - x0) * (p1 - p0) / (x1 - x0) + p0;
        return new ModulesFile_1.QuerySolution(n, result);
    }
};
ContainerServices = __decorate([
    (0, common_1.Injectable)()
], ContainerServices);
exports.ContainerServices = ContainerServices;
//# sourceMappingURL=ctn.services.js.map