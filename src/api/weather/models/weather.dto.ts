export type WeatherItemsCount = 8 | 40;

export type WeatherInfoByTime = {
  clouds: { all: number };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  weather: [
    {
      icon: string;
      main: string;
    },
  ];

  dt: number;
};

export type WeatherResponseDto = {
  city: {
    name: string;
  };
  cnt: WeatherItemsCount;
  list: WeatherInfoByTime[];
};
