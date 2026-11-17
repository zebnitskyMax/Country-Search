import { describe, it, expect } from 'vitest';
import { mapCountryResponse } from './mapCountryResponse';

describe('mapCountryResponse', () => {
  it(() => {
    const rawApiResponse = [
      {
        name: 'Spain',
        flags: { svg: 'https://flagcdn.com/es.svg' },
        capital: 'Madrid',
        region: 'Europe',
        population: 47351567,
        languages: [{ name: 'Spanish' }],
      },
    ];

    const result = mapCountryResponse(rawApiResponse);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      name: 'Spain',
      flagUrl: 'https://flagcdn.com/es.svg',
      capital: 'Madrid',
      region: 'Europe',
      population: 47351567,
      languages: ['Spanish'],
    });
  });

  it(() => {
    expect(mapCountryResponse([])).toEqual([]);
  });
});
