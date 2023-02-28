import { Injectable } from '@nestjs/common';
import {HealthStatus} from "../type/health-status";

@Injectable()
export class HealthcheckService {
  getHealthStatus(): string {
    return HealthStatus.HEALTHY;
  }
}
