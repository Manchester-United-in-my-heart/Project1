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
    Calculate(query) {
        let x = this.getElement(query.poolId);
        if (!x)
            return "notFound";
        x.poolValue.sort();
        let n = x.poolValue.length;
        let rank = query.percentile / 100;
        let res = rank * n;
        if (res % 1 !== 0)
            res = Math.floor(res) + 1;
        return x.poolValue[res - 1];
    }
};
ContainerServices = __decorate([
    (0, common_1.Injectable)()
], ContainerServices);
exports.ContainerServices = ContainerServices;
//# sourceMappingURL=container.services.js.map