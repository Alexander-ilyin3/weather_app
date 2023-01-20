import axios, { AxiosInstance, RawAxiosRequestConfig, AxiosResponse } from 'axios';

class RequestService {
  private baseAxiosConfig: RawAxiosRequestConfig = {
    baseURL: 'http://api.openweathermap.org',
  };

  public axiosInstance: AxiosInstance = axios.create(this.baseAxiosConfig);

  constructor() {}
  get<T>(url: string, config?: RawAxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config);
  }

  post<ResponseDto = unknown, RequestDto = unknown>(
    url: string,
    data?: RequestDto,
    config?: RawAxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseDto>> {
    return this.axiosInstance.post<RequestDto, AxiosResponse<ResponseDto>>(url, data, config);
  }
}

export const ApiRequestService = new RequestService();
