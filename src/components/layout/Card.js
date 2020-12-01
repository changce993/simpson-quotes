import {
    Div, 
    Col, 
    Text,
    Image
} from 'react-atomize';

const Card = ({ quote: { character, quote, image } }) => {

    return (
        <Col size={{xs:12,md:6,lg:4,xl:3}} data-aos='fade-up'>
            <Div
                p='2rem'
                bg='white'
                m={{b:'1rem'}}
                rounded='xl'
                shadow='1'
                hoverShadow='5'
                transition
            >
                <Div d='flex'>
                    <Image
                        data-aos='zoom-out'
                        src={image}
                        h='20rem'
                        w='auto'
                        m='0 auto'
                    />
                </Div>
                <Text
                    textWeight='700'
                    textSize='F24'
                    textAlign='center'
                    m={{b:'1rem'}}
                >{character}</Text>

                <Text
                    textAlign='center'
                >{quote}</Text>
            </Div>
        </Col>
    )
}

export default Card
