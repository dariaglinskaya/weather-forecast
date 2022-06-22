import { ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetWeatherGqlArgs } from './dto/weather-gql.dto';
import { WeatherGqlService } from './weather-gql.service';

@Resolver('WeatherGql')
export class WeatherGqlResolver {
  constructor(private weatherGqlService: WeatherGqlService) {}

  @Query('getWeatherForecast')
  async getWeatherReport(
    @Args({ type: () => GetWeatherGqlArgs }, new ValidationPipe())
    { lat, lng, date }: GetWeatherGqlArgs,
  ) {
    return await this.weatherGqlService.getWeatherForecast(lat, lng, date);
  }
}
