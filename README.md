## Description

A simple NestJS Application that takes latitude and longitude and date, and returns the weather description for that location

for a given date.

The date must be within the next 7 days.

Date format: 'YYYY-MM-DD'

## Env variables

Can be found in `.env`.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Execution

* To use REST, send the request to `localhost:9000/weather?lat=33.44&lng=-94.04&date=2022-06-23` with the given query params.
* To use GrapQl need to run followed query:

```
query {
  getWeatherForecast(lat:33.44,lng:-94.04,date:"2022-06-24") {
    description
  }
}
```

## Test

```bash
$ npm run test
```
