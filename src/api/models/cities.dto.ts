export type CityDto = {
  name: string;

  local_names: {
    uk: string;
    en: string;
  };

  lat: number;
  lon: number;

  country: 'UA';
  state: string;
};
