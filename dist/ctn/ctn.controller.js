"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerController = void 0;
const common_1 = require("@nestjs/common");
const ctn_services_1 = require("./ctn.services");
const ModulesFile_1 = require("./ModulesFile");
let ContainerController = class ContainerController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getElement(id) {
        return this.appService.getElement(id);
    }
    create1(body) {
        return this.appService.postElement(body);
    }
    create2(body) {
        return this.appService.Calculate(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ContainerController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContainerController.prototype, "getElement", null);
__decorate([
    (0, common_1.Post)('pool'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ModulesFile_1.Element]),
    __metadata("design:returntype", void 0)
], ContainerController.prototype, "create1", null);
__decorate([
    (0, common_1.Post)('quantile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ModulesFile_1.Query]),
    __metadata("design:returntype", void 0)
], ContainerController.prototype, "create2", null);
ContainerController = __decorate([
    (0, common_1.Controller)('container'),
    __metadata("design:paramtypes", [ctn_services_1.ContainerServices])
], ContainerController);
exports.ContainerController = ContainerController;
//# sourceMappingURL=ctn.controller.js.map