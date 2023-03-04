import { Module } from '@nestjs/common';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { HealthcheckService } from './healthcheck/healthcheck.service';
import {ScoreboardController} from "./scoreboard/scoreboard.controller";
import {ScoreboardService} from "./scoreboard/scoreboard.service";

@Module({
  imports: [],
  controllers: [HealthcheckController, ScoreboardController],
  providers: [HealthcheckService, ScoreboardService],
})
export class AppModule {}
