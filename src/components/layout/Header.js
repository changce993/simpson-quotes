import { Div } from 'react-atomize';
import Container from '../ui/Container';
import Navbar from './Navbar';

const Header = ({ children, bgImg, h, align }) => {

    if(align === undefined) align = 'flex-start';

    return (
        <Div overflow='hidden'>
            <Div
                data-aos='zoom-out'
                pos='relative'
                bgImg={bgImg}
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPos='center'
            >
                <Container>
                    <Div
                        pos='relative'
                        d='flex'
                        flexDir='column'
                        justify='center'
                        align={align}
                        h={h}
                    >
                        <Navbar />
                        { children }
                    </Div>
                </Container>
            </Div>
        </Div>
    )
}

export default Header
