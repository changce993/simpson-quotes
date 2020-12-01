import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CharacterProvider = ({ children }) => {

    const [ quotes, setQuotes ] = useState([]);
    const [ character, setCharacter ] = useState('');
    const [ characterQuotes, setCharacterQuotes ] = useState([]);

    useEffect(() => {
        const getQuotes = async () => {
            const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=50'
            const response = await axios(url);

            setQuotes(response.data);
        }
        getQuotes();
    }, []);

    useEffect(() => {
        const getCharacterQuotes = async () => {
            const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=50'
            const response = await axios(url);

            const characterQuote = response.data.filter(char => char.character.toLowerCase().includes(character.toLowerCase()));

            setCharacterQuotes(characterQuote);
        }
        getCharacterQuotes();
    }, [character]);

    return ( 
        <CharacterContext.Provider
            value={{
                quotes,
                character,
                characterQuotes,
                setCharacter
            }}
        >
            { children }
        </CharacterContext.Provider>
     );
}

export const CharacterContext = createContext();
 
export default CharacterProvider;