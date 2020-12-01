import styled from 'styled-components';

const Button = styled.a`

    button{
        outline:none;
        border:none;
        padding:.75rem 2rem;
        min-width:10rem;
        max-width:100%;
        border-radius:.5rem;
        background-color: #FECE45;
        transition:.3s;
        cursor:pointer;

        :hover{
            transform:translateY(-.25rem);
            box-shadow:3px 6px 16px rgba(254,206,69,.16);
        }
    }
`

export default Button;
