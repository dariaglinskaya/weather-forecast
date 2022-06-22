import { Test } from '@nestjs/testing';

import { WeatherForecastService } from './weather-forecast.service';

describe('WeatherForecastService', () => {
  let weatherForecastService: WeatherForecastService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [WeatherForecastService],
    }).compile();
    weatherForecastService = moduleRef.get<WeatherForecastService>(
      WeatherForecastService,
    );
  });

  describe('Should return correct weather forecast', () => {
    it('should return weather description', async () => {
      const response = await weatherForecastService.getWeatherForecast(
        33.44,
        -94.04,
      );
      expect(Array.isArray(response)).toBe(true);
    });
    it('should return 400 error', async () => {
      const response = weatherForecastService.getWeatherForecast(
        100000,
        100000,
      );
      const errorMessage = 'Request failed with status code 400';

      await expect(response).rejects.toThrow(errorMessage);
    });
  });
});
