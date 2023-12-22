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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const share_1 = require("@namecard-lawyers/share");
let MemberService = class MemberService {
    constructor(namecardRepo) {
        this.namecardRepo = namecardRepo;
    }
    async createMany(condition) {
        return this.namecardRepo.createMany(condition);
    }
    async uploadFilesImages(id, body) {
        return body.forEach(async (element) => {
            const data = {
                namecard: { connect: { member_number: id } },
                idfile: element.filename,
                path: element.path,
                namefile: element.originalname,
                updatedAt: new Date(),
            };
            return await this.namecardRepo.createImagesAppointment(data);
        });
    }
    async findByCondition(conditionscondition) {
        const conditions = {
            where: {
                id: Number(conditionscondition.id),
            },
        };
        return this.namecardRepo.findByCondition(conditions);
    }
    async findAll() {
        return this.namecardRepo.findAll();
    }
    async update(condition) {
        return this.namecardRepo.update(condition);
    }
    async remove(id, namecardID) {
        const condition = {
            where: {
                id: Number(id),
            },
        };
        const deleteuser = await this.namecardRepo.delete(condition);
        if (deleteuser) {
            const conditioniamge = {
                where: { images_namecard: namecardID },
            };
            const deleteImage = await this.namecardRepo.deleteMany(conditioniamge);
            return deleteImage;
        }
        return deleteuser;
    }
    async removeImage(images_ghs) {
        const condition = {
            where: { images_namecard: images_ghs },
        };
        return await this.namecardRepo.deleteMany(condition);
    }
};
MemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [share_1.NameCardRepository])
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map