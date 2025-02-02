import React, { createContext, useState, useEffect } from "react";
import api, { getPokemonImageUrl } from "../services/api";
import axios from "axios";

export const PokemonContext = createContext();

// pokemon details 
export const PokemonProvider = props =>{
    const [pokemons, setPokemons] = useState([]);
    const fetchPokemonsDetails = async (pokemons) =>{
        for (const pokemon of pokemons){
            const {data} = await axios.get(pokemon.url)
                pokemon.id = data.id
                pokemon.types = data.types
                pokemon.image = getPokemonImageUrl(data.id)
        }
        setPokemons([...pokemons]);
    };
    //function loading pokemon
    const updatePokemon = pokemon => {
        const index = pokemons.findIndex(({ id }) => id === pokemon.id)
        pokemons[index] = pokemon
    
        setPokemons([...pokemons]);
      }

    //function for fetch pokemons
    const fetchPokemons = async () =>{
        const {data} = await api.get('/pokemon?limit=18')
        fetchPokemonsDetails(data.results);
    };
    //if the array is empty use the useEffect call function
    useEffect(() => {
        if(!pokemons.length) fetchPokemons();
    }, []);

    return (
        <PokemonContext.Provider value= {{ pokemons, updatePokemon }}>
            {props.children}
        </PokemonContext.Provider>   
    )
};