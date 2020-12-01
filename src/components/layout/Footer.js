import { Div } from 'react-atomize';
import Container from '../ui/Container';
import Link from '../ui/Link';
import styled from 'styled-components';

const Anchor = styled(Link)`
    color:black;
`

const Footer = () => {
    return (
        <Container>
            <Div
                p='2rem 1rem'
                d='flex'
                flexDir={{xs:'column-reverse', md:'row'}}
                justify='space-between'
                align='center'
                border={{t:'1px solid'}}
                borderColor='black10'
            >
                <p>Made by Ricardo Chance</p>

                <Div
                    d='flex'
                >
                    <Anchor to='/'>Inicio</Anchor>
                    <Anchor to='/quotes'>Frases</Anchor>
                    <Anchor to='/github'>Github</Anchor>
                </Div>
            </Div>
        </Container>
    )
}

export default Footer
