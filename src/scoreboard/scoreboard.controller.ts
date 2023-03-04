import { Controller, Get } from '@nestjs/common';
import { ScoreboardService } from './scoreboard.service';
import {Scoreboard} from "../type/scoreboard";

@Controller()
export class ScoreboardController {
  constructor(private readonly scoreboardService: ScoreboardService) {}

  @Get("/scoreboard")
  getScoreboard(): Scoreboard {
    return this.scoreboardService.getScoreboard();
  }
}
