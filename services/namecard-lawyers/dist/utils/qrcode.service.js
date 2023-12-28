"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQRCode = void 0;
const qrcode = require("qrcode");
async function generateQRCode(text) {
    try {
        const qrCode = await qrcode.toDataURL(text);
        return qrCode;
    }
    catch (error) {
        throw new Error('Failed to generate QR code');
    }
}
exports.generateQRCode = generateQRCode;
//# sourceMappingURL=qrcode.service.js.map