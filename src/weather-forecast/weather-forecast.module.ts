import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherForecastService } from './weather-forecast.service';

@Module({
  imports: [HttpModule],
  providers: [WeatherForecastService],
  exports: [WeatherForecastService],
})
export class WeatherForecastModule {}
