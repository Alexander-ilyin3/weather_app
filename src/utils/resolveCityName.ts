import { CityDto } from '@api/cities/models/cities.dto';

export const resolveCityName = (city: CityDto, withState?: boolean) => {
  let cityName = '';
  cityName = city.local_names.uk || city.local_names.en || city.name;

  if (withState && city.state) {
    cityName += `, ${city.state}`;
  }
  return cityName;
};
