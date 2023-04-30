import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma_service";
import {Scoreboard, Prisma} from "@prisma/client/";

@Injectable()
export class ScoreboardService {
    constructor(private prisma: PrismaService) {}

    async scoreboard(
        scoreboardWhereInput: Prisma.ScoreboardWhereInput,
    ): Promise<Scoreboard | null> {
        return this.prisma.post.findUnique({
            where: scoreboardWhereInput,
        });
    }

    async scoreboards(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ScoreboardWhereUniqueInput;
        where?: Prisma.ScoreboardWhereInput;
        orderBy?: Prisma.ScoreboardOrderByWithRelationInput
    }): Promise<Scoreboard[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.scoreboard.findMany({
            skip, take, cursor, where, orderBy
        });
    }

    async createScoreboard(data: Prisma.ScoreboardCreateInput): Promise<Scoreboard> {
        return this.prisma.scoreboard.create({
            data,
        });
    }
}
