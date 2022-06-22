export type WeatherResponse = {
  daily: [
    {
      weather: [
        {
          description: string;
        },
      ];
    },
  ];
};
