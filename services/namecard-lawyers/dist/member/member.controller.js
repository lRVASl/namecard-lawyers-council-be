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
exports.MemberController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const member_service_1 = require("./member.service");
const client_1 = require("@prisma/client");
const path_1 = require("path");
const uuid_1 = require("uuid");
let MemberController = class MemberController {
    constructor(memberService) {
        this.memberService = memberService;
    }
    async getimage(image, res) {
        try {
            const imagePath = (0, path_1.join)(__dirname, '../../', `${process.env.PATH_MOUNTDIR_IMAGES}`, `${image}`);
            res.sendFile(`${imagePath}`);
        }
        catch (error) {
            res
                .status(404)
                .sendFile('path/to/default/image.jpg', { root: './public' });
        }
    }
    create(data) {
        return this.memberService.createMany(data);
    }
    findByCondition(condition) {
        return this.memberService.findByCondition(condition);
    }
    async uploadFilesImages(id, images) {
        return this.memberService.uploadFilesImages(id, images);
    }
    findAll() {
        return this.memberService.findAll();
    }
    update(condition) {
        return this.memberService.update(condition);
    }
    remove(id, member_number) {
        console.log(id);
        console.log(member_number);
        return this.memberService.remove(id, member_number);
    }
    removeImage(image) {
        return this.memberService.removeImage(image);
    }
};
__decorate([
    (0, common_1.Get)('/get_image/namecard'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Query)('image')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "getimage", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/findbyid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "findByCondition", null);
__decorate([
    (0, common_1.Post)('/images/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: `${process.env.PATH_MOUNTDIR_IMAGES}`,
            filename: (req, file, callback) => {
                const filename = `${(0, uuid_1.v4)()}-${file.originalname}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], MemberController.prototype, "uploadFilesImages", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/updateuser'),
    __param(0, (0, common_1.Body)('condition')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('member_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('/delete-image'),
    __param(0, (0, common_1.Body)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "removeImage", null);
MemberController = __decorate([
    (0, common_1.Controller)('api/namecard-lawyers'),
    __metadata("design:paramtypes", [member_service_1.MemberService])
], MemberController);
exports.MemberController = MemberController;
//# sourceMappingURL=member.controller.js.map