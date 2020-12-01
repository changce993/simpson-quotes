import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Anchor = styled(Link)`
    color:white;
        padding:.5rem 1rem;
        position:relative;
    
    ::after{
        position:absolute;
        left:0;
        bottom:0;
        content:'';
        width:0;
        height:1px;
        border-bottom:1px solid white;
        transition:.3s;
    }

    :hover{
        color:#FECE45;
     
        ::after{
            width:100%;
            border-bottom:1px solid #FECE45;
        }
    }
`

export default Anchor
