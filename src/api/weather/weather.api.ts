import { AxiosResponse } from 'axios';

import { ApiRequestService } from '@services/api-request/api-request';

import { WeatherResponseDto } from './models/weather.dto';
import { GetWeatherParams } from './models/weather.query';
import config from 'src/config';
import { DateRangeButtonOptions } from 'src/features/DateRangeOptions/DateRangeOptions';

export abstract class WeatherApi {
  static async getWeather({ ...params }: GetWeatherParams): Promise<AxiosResponse<WeatherResponseDto>> {
    return ApiRequestService.get('data/2.5/forecast', {
      params: {
        ...params,
        appid: config.appid,
        units: 'metric',
        cnt: params.dateRange === DateRangeButtonOptions.TODAY ? 8 : 40,
      },
    });
  }
}
