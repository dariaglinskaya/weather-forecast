import {
  Get,
  Controller,
  HttpStatus,
  HttpException,
  Query,
} from '@nestjs/common';

import { WeatherForecastService } from './weather-forecast.service';
import { dayDiffFromNow } from '../shared/utils/utils';

@Controller('weather')
export class WeatherForecastController {
  constructor(
    private readonly weatherForecastService: WeatherForecastService,
  ) {}

  @Get()
  async root(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
    @Query('date') date: string,
  ): Promise<object> {
    try {
      const dayIndex = dayDiffFromNow(new Date(date));
      const response = await this.weatherForecastService.getWeatherForecast(
        lat,
        lng,
      );

      return {
        description: response[dayIndex]?.weather[0]?.description,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
