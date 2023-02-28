import { Module } from '@nestjs/common';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { HealthcheckService } from './healthcheck/healthcheck.service';

@Module({
  imports: [],
  controllers: [HealthcheckController],
  providers: [HealthcheckService],
})
export class AppModule {}
