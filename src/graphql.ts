
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface WeatherGql {
    description: string;
}

export interface IQuery {
    getWeatherForecast(lat: number, lng: number, date: string): WeatherGql | Promise<WeatherGql>;
}

type Nullable<T> = T | null;
