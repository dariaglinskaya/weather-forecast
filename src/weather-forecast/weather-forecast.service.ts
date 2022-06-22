import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { WeatherResponse } from './types/weather-response.type';

@Injectable()
export class WeatherForecastService {
  private client: AxiosInstance;

  constructor() {
    const appId = process.env.OPEN_WEATHER_APP_ID;
    this.client = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
      params: {
        appid: appId,
      },
    });
  }

  async getWeatherForecast(lat: number, lng: number): Promise<WeatherResponse> {
    try {
      const response = await this.client.get('', {
        params: { lat, lon: lng, exclude: 'hourly,current,minutely' },
      });
      return response.data?.daily;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
