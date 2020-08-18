import styled from 'styled-components';

export const Area_Title = styled.div`
    justify-content: center;
    display: flex;
    padding-top: 30px;
    padding-bottom: 20px;

    @media (max-width: 800px){
        text-align: center;
        padding-top: 60px;
        padding-bottom: 10px;
    }
`;

export const Area_H3 = styled.div`
    justify-content: center;
    display: flex;
    padding-bottom: 20px;

    @media (max-width: 800px){
        padding-top: 20px;
        padding-bottom: 10px;
        
    }
`;

export const Canvas = styled.div`
    justify-content: center;
    display: flex;
    padding-bottom: 50px;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
    }
`;

export const Area = styled.div`
    width: 60vh;
    padding-right: 20px;

    @media (max-width: 800px){
        /* width: 0; */
        padding-right: 0;
    }
`;

export const Area2 = styled.div`
    width: 60vh;
    padding-left: 20px;
    
    @media (max-width: 800px){
        /* width: 0; */
        padding-left: 0;
    }
`;

export const Area_Button = styled.div`
    justify-content: center;
    display: flex;
    padding-bottom: 30px;
`;

export const Music_Image = styled.img`
    width: 60vh;
    @media (max-width: 800px) {
        width: 50vh;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    font-size: 20px;

    @media (max-width: 800px) {
       font-size: 15px;
    }
`;





