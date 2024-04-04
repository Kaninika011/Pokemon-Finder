const POKEMON_API = "https://pokeapi.co/api/v2/";

//getPokemonList
export async function getPokemonList() {
  const res = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
  const data = await res.json();
  return data.results;
}

//getPokemonInfo
export async function getPokemonInfo(name: string) {
  const res = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await res.json();
  return data;
}
