import { Text } from 'react-atomize';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';

const Home = () => {

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    setTimeout(function () {
        window.scrollTo(0, 1)
    }, 0)

    const bgImg = 'assets/backgrounds/home.png';

    return (
        <Header
            bgImg={bgImg}
            // h='100vh'
            h={{xs:'calc(var(--vh, 1vh) * 100)', md:'100vh'}}
        >
            <Text
                data-aos='fade-up'
                data-aos-delay='300'
                textSize={{xs:'F48', md:'F80'}}
                textWeight='700'
                textColor='white'
                w={{xs:'100%', md:'80%', lg:'70%', xl:'60%'}}
                m={{b:'2rem'}}
            >Vamos!! Se que quieres tu frase de los Simpsons</Text>

            <Button
                href='/quotes'
                data-aos='fade-up'
                data-aos-delay='500'
            >
                <button>Buscar</button>
            </Button>
        </Header>
    )
}

export default Home
