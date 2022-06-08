import { Component } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'poke';
  constructor() {
    this.getPokemons();
  }

  async getPokemons() {
    const api = new PokemonClient();
    const list = await (await api.listPokemons(0, 2000)).results;
    const numId = Math.floor(Math.random() * list.length);
    const poke = list[numId];
    const pokemonPromise = await fetch(poke.url);
    const pokemon = await pokemonPromise.json();
    console.log(pokemon);
  }
}
