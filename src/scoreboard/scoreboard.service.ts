import {Injectable} from '@nestjs/common';
import {Scoreboard} from "../type/scoreboard";
import {ScoreboardMock} from "./scoreboard_mock";

@Injectable()
export class ScoreboardService {
    getScoreboard(): Scoreboard {
        return ScoreboardMock;
    }
}
