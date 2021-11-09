import React, { createContext } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = props =>{
    const pokemons = [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}]

    return (
        <PokemonContext.Provider value= {{ pokemons }}>
            {props.children}
        </PokemonContext.Provider>   
    )
};