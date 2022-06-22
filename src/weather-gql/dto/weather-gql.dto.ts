import { ArgsType, Field, Float, InputType } from '@nestjs/graphql';
import { IsDateString, IsLatitude, IsLongitude } from 'class-validator';

import { IsInDaysRange } from '../../shared/decorators/is-in-days-range.decorator';

@ArgsType()
@InputType('GetWeatherGqlArgs')
export class GetWeatherGqlArgs {
  @Field(() => Float)
  @IsLatitude()
  lat: number;

  @Field(() => Float)
  @IsLongitude()
  lng: number;

  @Field(() => String)
  @IsDateString()
  @IsInDaysRange()
  date: string;
}
