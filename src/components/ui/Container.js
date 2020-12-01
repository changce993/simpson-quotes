import { Div } from 'react-atomize';

const Container = ({ children, w }) => {

    if(w === undefined) w = '90%';

    return (
        <Div
            maxW='1440px'
            w={w}
            m='0 auto'
        >
            { children }
        </Div>
    )
}

export default Container
