import styled from 'styled-components';

const Button = styled.a` 
    color: var(--white);
    border: 1px solid var(--white);
    padding: 10px 10px;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 2px;
    text-decoration: none;
    transition: opacity .3s;
    color: #292929;
    background-color: var(--white);
    display: inline-block;

    &:hover,
    &:focus {
        text-decoration: underline; 
    }

    @media (max-width: 800px) {
        border-radius: 0;
    }
`;

export default Button;