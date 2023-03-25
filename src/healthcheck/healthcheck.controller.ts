import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';

@Controller()
export class HealthcheckController {
  constructor(private readonly appService: HealthcheckService) {}

  @Get("/")
  getHealthStatus(): string {
    return this.appService.getHealthStatus();
  }
}
