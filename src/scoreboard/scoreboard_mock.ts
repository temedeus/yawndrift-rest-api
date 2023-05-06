import {Scoreboard} from "@prisma/client/";

export const ScoreboardMock: Scoreboard = {
    id: 0,
    playerId: 0,
    trackId: 0,
    endTime: new Date(Date.now())
}
