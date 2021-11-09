import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const PokemonContext = createContext();

export const PokemonProvider = props =>{
    const [pokemons, setPokemons] = useState([]);
    //function for fetch pokemons
    const fetchPokemons = async () =>{
        const {data} = await api.get('/pokemon?limit=18')
        setPokemons(data.results);
    };
    //if the array is empty use the useEffect call function
    useEffect(() => {
        if(!pokemons.length) fetchPokemons();
    }, []);

    return (
        <PokemonContext.Provider value= {{ pokemons }}>
            {props.children}
        </PokemonContext.Provider>   
    )
};