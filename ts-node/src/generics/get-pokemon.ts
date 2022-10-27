import axios from "axios";
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async(pokemonName:string):Promise<Pokemon> => {

    //como estoy dentro de una promesa, puedo usar await
    //await indica que: espera a que esta promesa se resuelva y luego continua ejecutando el programa
    const { data } = await axios.get<Pokemon>( `https://pokeapi.co/api/v2/pokemon/${pokemonName}` )
    return data;
}