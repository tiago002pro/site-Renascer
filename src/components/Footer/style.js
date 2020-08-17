import styled from 'styled-components';

export const FooterBase = styled.div`
    border-top: 5px solid blue;
    color: var(--white);
    text-align: center;
`;


export const FooterBaseInsideTop = styled.div`
    background-color: #292929;
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 32px;
    padding-bottom: 20px;
    text-align: center;   

    @media (max-width: 800px){
        text-align: center;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 2px;
        padding-bottom: 20px;
    }
`;

export const FooterBaseInsideMidlle = styled.div`
    background-color: #333333;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 32px;
    padding-bottom: 32px;
`;
export const FooterCircle = styled.div`
    background-color: var(--white);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: inline-grid;
    place-items: center;
    justify-items: center;
    margin: 5px;
    opacity: .5;

    &:hover,
    &:focus{
        opacity: 1;
    }

`;

export const FooterImg = styled.img`
    width: 30px;
    height: 30px;
    justify-items: center;
`;

export const FooterBaseInsideDown = styled.div`
    color: var(--white);
    background-color: #1c1c1c;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 50px;

    @media (max-width: 800px){
        padding-bottom: 10px;
    }
`;