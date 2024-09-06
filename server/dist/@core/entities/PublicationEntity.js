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
var PublicationEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationEntity = void 0;
const typeorm_1 = require("typeorm");
let PublicationEntity = PublicationEntity_1 = class PublicationEntity {
    constructor(title, content, autorId) {
        this.title = title;
        this.content = content;
        this.autorId = autorId;
    }
    static create(publicationDTO, autorId) {
        const { title, content } = publicationDTO;
        return new PublicationEntity_1(title, content, autorId);
    }
};
exports.PublicationEntity = PublicationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PublicationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PublicationEntity.prototype, "autorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "content", void 0);
exports.PublicationEntity = PublicationEntity = PublicationEntity_1 = __decorate([
    (0, typeorm_1.Entity)('publications'),
    __metadata("design:paramtypes", [String, String, Number])
], PublicationEntity);
//# sourceMappingURL=PublicationEntity.js.map