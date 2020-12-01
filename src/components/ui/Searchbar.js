import { useContext } from 'react';
import { Div, Icon } from 'react-atomize'
import styled from 'styled-components';

import { CharacterContext } from '../../context/CharacterContext';

const SearchInput = styled.input`
    outline:none;
    border:none;
    padding:1rem;
`

const Searchbar = () => {

    const { setCharacter } = useContext(CharacterContext);

    const setCharacterFn = e => {
        setCharacter(e.target.value)
    }

    return (
        <Div
            data-aos='fade-up'
            data-aos-delay='500'
            bg='white'
            d='flex'
            justify='center'
            align='center'
        >
            <SearchInput
                placeholder='Homer Simpson'
                onChange={setCharacterFn} 
            />

            <Icon name="Search" size="20px" p={{x:'1rem'}} cursor='pointer'/>
        </Div>
    )
}

export default Searchbar
