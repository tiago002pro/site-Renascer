import React from 'react';
import PageDefault from '../../components/PageDefault';
import ImgMusic from './assets/Img/teste.jpg';
import { Area, MusicImage } from './style';

function Music(){
    return(
        <PageDefault>
            <Area>
                <MusicImage src={ImgMusic} />
            </Area>
        </PageDefault>
    );
}

export default Music;