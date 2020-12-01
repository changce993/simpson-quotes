import { Div } from 'react-atomize';
import Link from '../ui/Link';

const Navbar = () => {
    return (
        <Div
            data-aos='fade-down'
            data-aos-delay='300'
            pos='absolute'
            top='0'
            left='0'
            w='100%'
            h='4rem'
            d='flex'
            justify='flex-end'
            align='center'
        >
            <Link to='/'>Inicio</Link>
            <Link to='/quotes'>Frases</Link>
            <Link to='/github'>Github</Link>
        </Div>
    )
}

export default Navbar
