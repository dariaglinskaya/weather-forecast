import { Injectable } from '@nestjs/common';

import { dayDiffFromNow } from '../shared/utils/utils';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';
import { WeatherForecastOutput } from './types/weather-gql.type';

@Injectable()
export class WeatherGqlService {
  constructor(private weatherForecastService: WeatherForecastService) {}

  async getWeatherForecast(
    lat: number,
    lng: number,
    date: string,
  ): Promise<WeatherForecastOutput> {
    const dayIndex = dayDiffFromNow(new Date(date));
    const daily = await this.weatherForecastService.getWeatherForecast(
      lat,
      lng,
    );
    return {
      description: daily[dayIndex]?.weather[0]?.description,
    };
  }
}
