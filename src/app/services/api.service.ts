import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  // Busca por vários pokemons
  buscarListaPokemons(
    endPoint: string
  ): Promise<[{ name: string; url: string }]> {
    return fetch(endPoint)
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      });
  }

  // Recupera id do pokemon
  recuperaId(url: string): Promise<[]> {
    return fetch(url)
      .then((res) => res.json())
      .then((json) => {
        return json.id;
      });
  }

  // Monta um novo array com dados polidos
  async montaListaPokemons(): Promise<object[]> {
    const endPointLista =
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
    const lista = await this.buscarListaPokemons(endPointLista);
    let listaAprimorada: Array<object> = [];

    // Monta novo array com os itens da lista
    lista.forEach(async (item) => {
      const id = await this.recuperaId(item.url);
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      const itemLista = { id: id, nome: item.name, imagem: img };
      listaAprimorada.push(itemLista);
    });

    return listaAprimorada;
  }

  // Busca unitária
  buscarPokemon(
    nome: string
  ): Promise<{ id: number; nome: string; imagem: string }> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((res) => res.json())
      .then((json) => {
        return {
          id: json.id,
          nome: json.name,
          imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${json.id}.png`,
        };
      });
  }
}
