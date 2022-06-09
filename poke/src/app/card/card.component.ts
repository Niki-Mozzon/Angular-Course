import { Component, ElementRef, OnInit } from '@angular/core';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { Type, types } from 'src/assets/static/variables/types';

@Component({
  selector: 'poke-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon!: Pokemon;

  colors: Type[] = [];
  color1 = '';
  color2 = '';
  styleString = ``;
  async ngOnInit() {
    this.pokemon = await this.getPokemons();
    this.getColors();
  }

  async getPokemons() {
    const api = new PokemonClient();
    const randomId = Math.floor(Math.random() * (898 - 1) + 1);
    console.log(randomId);
    //const pokemon: Pokemon = await api.getPokemonById(808);
    const pokemon: Pokemon = await api.getPokemonById(randomId);
    pokemon.name = pokemon.name.split('-').join(' ');
    console.log(pokemon);
    return pokemon;
  }

  getColors() {
    const colors: string[] = new Array();
    this.pokemon.types.map((typeP) => {
      colors.push(typeP.type.name);
    });
    this.colors = types.filter((type) => colors.includes(type.name));
    if (this.pokemon.types.length > 1) {
      this.color1 = this.colors[0].primaryColor;
      this.color2 = this.colors[1].primaryColor;
    } else {
      this.color1 = this.colors[0].primaryColor;
      this.color2 = this.colors[0].secondaryColor;
    }
    console.log(this.color1);
    console.log(this.color2);
    this.styleString = `background-image: linear-gradient(200deg, #${this.color1}, #${this.color2})`;
  }
}
