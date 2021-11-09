import React, { useState, useEffect } from "react";
import { getPokemonImageUrl } from "../../services/api";
import axios from "axios";

import { PokeballMini } from "../Spinner";

import {
  Card,
  StyledLink,
  CardName,
  CardImg,
  CardDetails,
  CardId,
  Container,
  Menu
} from "./styles";

const PokemonCard = ({ pokemon }) => {
  const nameCapitalized = pokemon.name.split("-")[0];
  
  const pokemonType = pokemon.types.map(
    ({type}) => type.name[0].toUpperCase() + type.name.slice(1)
  );

  return (

    <Container>
       <StyledLink to={`pokemon/${pokemon.id}`}>
      <Card className={pokemonType[0]}>
        <CardId className={pokemonType[0]}># {pokemon.id}</CardId>
        <CardImg
          src={pokemon.image}
          alt={nameCapitalized}
          style={{ display: "block" }}
        />
        <CardName>{nameCapitalized}</CardName>
        <CardDetails>{pokemonType.join(" / ")}</CardDetails>
      </Card>
    </StyledLink>
    <Menu>
      <img 
        src='/icons/not_caught.png'
      />
      <img 
        src='/icons/not_favorite.png'
      />
    </Menu>
    </Container>
   
  );
};

export default PokemonCard;
