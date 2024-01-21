import { PokeApiType } from './poke-api-type.model';

export interface PokeApiDetail {
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokeApiType[];
  weight: number;
  height: number;
}
