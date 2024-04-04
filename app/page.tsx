import { PokemonGrid } from "./../components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();
  return <PokemonGrid pokemonList={pokemonList} />;
}
//Text input: filter out names and need to use "Use client" to access useState.
//Pass Data to pokemon card..
