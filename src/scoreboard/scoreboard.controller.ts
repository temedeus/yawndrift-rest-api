import {Controller, Get, Param} from '@nestjs/common';
import { ScoreboardService } from './scoreboard.service';
import {Scoreboard} from "@prisma/client/";

@Controller()
export class ScoreboardController {
  constructor(private readonly scoreboardService: ScoreboardService) {}

  @Get('scoreboard/:id')
  async getScoreboard(@Param('id') id: string): Promise<Scoreboard> {
    return this.scoreboardService.scoreboard({ id: Number(id) });
  }

  @Get('scoreboard/by-track/:trackId')
  async getScoreboards(@Param('trackId') trackId: string): Promise<Scoreboard[]> {
    return this.scoreboardService.scoreboards({
      where: { trackId: Number(trackId) },
    });
  }
}
