import { AxiosResponse } from 'axios';

import { ApiRequestService } from '../services/api-request/api-request';
import { CityDto } from './models/cities.dto';
import { GetCountriesParams } from './models/cities.query';

export abstract class CitiesApi {
  static async getCities({ ...params }: GetCountriesParams): Promise<AxiosResponse<CityDto[]>> {
    return ApiRequestService.get('/geo/1.0/direct', { params });
  }
}
