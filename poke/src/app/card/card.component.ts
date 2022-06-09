import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonClient } from 'pokenode-ts';

@Component({
  selector: 'poke-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon!: Pokemon;

  spriteMini: string | null = '';
  pokeId?: number;
  pokeName = '';

  async ngOnInit() {
    this.pokemon = await await this.getPokemons();
    /* this.pokeId=this.pokemon.id;
         this.pokeName=this.pokemon.name;
         this.spriteMini=this.pokemon.sprites.front_default; */
  }

  async getPokemons() {
    const api = new PokemonClient();
    const randomId = Math.floor(Math.random() * (898 - 1) + 1);
    console.log(randomId);

    //const pokemon:Pokemon = await api.getPokemonById(877);
    const pokemon: Pokemon = await api.getPokemonById(randomId);
    pokemon.name = pokemon.name.split('-').join(' ');
    console.log(pokemon);
    return pokemon;
  }

  getColors() {
    const colors: string[] = new Array();
    this.pokemon.types.forEach((type) => {
      colors.push(type.type.name);
    });
  }
}
