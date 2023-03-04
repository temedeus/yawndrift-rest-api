import {Injectable} from '@nestjs/common';
import {Scoreboard} from "../type/scoreboard";

@Injectable()
export class ScoreboardService {
    getScoreboard(): Scoreboard {
        return null;
    }
}
