import { useContext } from 'react';
import { Text, Row } from 'react-atomize';
import Header from '../components/layout/Header';
import Searchbar from '../components/ui/Searchbar';
import Card from '../components/layout/Card';
import Container from '../components/ui/Container';
import Footer from '../components/layout/Footer';

import { CharacterContext } from '../context/CharacterContext';

const Quotes = () => {

    const bgImg = 'assets/backgrounds/quotes.png';

    const { quotes, characterQuotes } = useContext(CharacterContext);

    return (
        <div>
            <Header bgImg={bgImg} h='60vh' align='center'>
                <Text
                    data-aos='fade-up'
                    data-aos-delay='300'
                    textColor='white'
                    textSize={{xs:'F48', md:'F80'}}
                    textWeight='700'
                    m={{b:'2rem'}}
                >Busca frases por personaje</Text>

                <Searchbar />
            </Header> 

            <Container>
                <Row p={{y:{xs:'2rem', md:'5rem'}}}>
                    {characterQuotes.length > 0 ? (
                        characterQuotes.map((quote, index) => (
                            <Card quote={quote} key={index} />
                        ))
                    ) : quotes.map((quote, index) => (
                            <Card quote={quote} key={index} />
                        ))
                    }
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Quotes
