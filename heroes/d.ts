export const GenderIterable = {
  male: 'male',
  female: 'female',
} as const;

export type Gender = keyof typeof GenderIterable;

export type Human = {
  name: string,
  birth_year: string,
  gender: Gender,
  homeworld: string,
  species: string[],
};

export type People = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Human[],
  species: string[],
};

export type InitialStateHeroes = {
  femaleFans: number,
  maleFans: number,
  othersFans: number,
  page: number,
  isLoading: boolean,
  people: People,
  error: unknown,
  home: AdditionalInfo[],
  species: AdditionalInfo[],
};

export type InitialStateFavoriteHeroes = {
  male: string[],
  female: string[],
  other: string[],
};

export type AdditionalInfo = Pick<Human, 'name'>;
