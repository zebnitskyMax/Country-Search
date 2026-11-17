interface RawCountry {
  name: string;
  flags: { svg: string };
  capital: string;
  region: string;
  population: number;
  languages: { name: string }[];
}

export interface CountryCard {
  name: string;
  flagUrl: string;
  capital: string;
  region: string;
  population: number;
  languages: string[];
}

export function mapCountryResponse(raw: RawCountry[]): CountryCard[] {
  return raw.map((country) => ({
    name: country.name,
    flagUrl: country.flags.svg,
    capital: country.capital,
    region: country.region,
    population: country.population,
    languages: country.languages.map((lang) => lang.name),
  }));
}
