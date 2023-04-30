import {INestApplication, OnModuleInit} from "@nestjs/common";
import {PrismaClient} from "@prisma/client/scripts/default-index";

export class PrismaService extends  PrismaClient implements OnModuleInit {
    async onModuleInit(): Promise<any> {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
            }
        )
    }

}