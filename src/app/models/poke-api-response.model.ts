import { PokeApiResult } from "./poke-api-result.model";

export interface PokeApiResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeApiResult[];
}