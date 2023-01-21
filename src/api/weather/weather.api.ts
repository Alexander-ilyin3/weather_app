import { AxiosResponse } from 'axios';

import { ApiRequestService } from '@services/api-request/api-request';

import { WeatherDto } from './models/weather.dto';
import { GetWeatherParams } from './models/weather.query';
import { DateRangeButtonOptions } from 'src/components/DateRangeOptions/DateRangeOptions';
import config from 'src/config';

export abstract class WeatherApi {
  static async getWeather({ ...params }: GetWeatherParams): Promise<AxiosResponse<WeatherDto>> {
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