import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { WeatherGqlModule } from './weather-gql/weather-gql.module';
import { WeatherForecastController } from './weather-forecast/weather-forecast.controller';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WeatherGqlModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.schema.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: true,
    }),
  ],
  providers: [WeatherForecastService],
  controllers: [WeatherForecastController],
})
export class AppModule {}
