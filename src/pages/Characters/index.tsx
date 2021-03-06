import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from './styles'

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('characters')
      .then(response => {
        setCharacters(response.data.data.results)
        
      })
    .catch(err => console.log(err))

  }, [])


  return (
    <Container>
      <h1>Personagens</h1>
      <ul>
        {characters.map(character => {
          return (
            <li key={character.id}>
              <img 
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
              alt={`Foto do ${character.name}`}/>
              <span className="name">{character.name}</span>
              <span className="description">{character.description}</span>  
              <span className="">{character.id}</span>  
              
            </li>

          )
        })}
      </ul>
    </Container>
  ) 
}

export default Characters;