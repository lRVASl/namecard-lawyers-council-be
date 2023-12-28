"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const share_1 = require("@namecard-lawyers/share");
const configs_1 = require("./configs");
const cors = require("cors");
const app_module_1 = require("./app.module");
const PORT = (0, configs_1.default)().port;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.NamecardMainModule);
    const corsOptions = {
        origin: '*',
        credentials: true,
        optionSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
    const prismaService = app.get(share_1.PrismaService);
    prismaService.enableShutdownHooks(app);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT);
    console.log(`service start on port : ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map