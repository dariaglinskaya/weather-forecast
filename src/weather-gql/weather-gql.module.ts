import { Module } from '@nestjs/common';
import { WeatherForecastModule } from '../weather-forecast/weather-forecast.module';
import { WeatherGqlResolver } from './weather-gql.resolver';
import { WeatherGqlService } from './weather-gql.service';

@Module({
  imports: [WeatherForecastModule],
  providers: [WeatherGqlService, WeatherGqlResolver],
  exports: [WeatherGqlResolver],
})
export class WeatherGqlModule {}
