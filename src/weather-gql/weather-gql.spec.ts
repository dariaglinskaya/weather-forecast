import { WeatherGqlService } from './weather-gql.service';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';

describe('WeatherGqlService', () => {
  let service: WeatherGqlService;

  beforeEach(() => {
    const weatherForecastService = new WeatherForecastService();

    weatherForecastService.getWeatherForecast = jest.fn().mockResolvedValue([
      {
        weather: [
          {
            description: 'clear sky',
          },
        ],
      },
      {
        weather: [
          {
            description: 'clear sky',
          },
        ],
      },
      {
        weather: [
          {
            description: 'few clouds',
          },
        ],
      },
    ]);

    service = new WeatherGqlService(weatherForecastService);
  });

  test('Should return correct description', async () => {
    const response = await service.getWeatherForecast(
      33.44,
      -94.04,
      '2022-06-23',
    );

    expect(response).toStrictEqual({ description: 'clear sky' });
  });
});
