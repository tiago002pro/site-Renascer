import React from 'react';
import { Area_Title, Canvas, Area, Area2, Area_Button, List, Music_Image, Area_H3 } from './style';
import Button from '../../../../components/Button';

import album_1 from '../../assets/Img/Album1.jpeg';
import album_2 from '../../assets/Img/Album2.jpeg';

function PageMusic(){
    return (
        <div>
            <Area_Title>
                <h1>O Som do Avivamento</h1>
            </Area_Title>
            <Area_Button>
                <Button as="a" href="https://open.spotify.com/album/6VuNj1L7SV0upfoRjXdtIz" target="_blank" >Ouça Agora</Button>
            </Area_Button>

            <Canvas>
                <Area>
                    <Music_Image src={album_2} />
                </Area>

                <Area2>
                    <Area_H3>
                        <h3>Músicas</h3>
                    </Area_H3>

                    <List> 
                        <li>1. A Ele Toda Glória</li>
                        <li>2. Eu Quero Fogo</li>
                        <li>3. Na Estrada do Calvário</li>
                        <li>4. Digno de Receber</li>
                        <li>5. Te Louvarei</li>
                        <li>6. O Leão Regiu</li>
                        <li>7. Teu Reino</li>
                        <li>8. O Som do Avivamento</li>
                    </List>
                </Area2>
            </Canvas>

            <Area_Title>
                <h1>Vandinho (Ao Vivo)</h1>
            </Area_Title>
            <Area_Button>
                    <Button as="a" href="https://open.spotify.com/album/0Tlf3Bfu5sxwBjODhkQgyn" target="_blank" >Ouça Agora</Button>
            </Area_Button>

            <Canvas>
                  <Area>
                    <Music_Image src={album_1} />
                </Area>

                <Area2>
                    <Area_H3>
                        <h3>Músicas</h3>
                    </Area_H3>

                    <List> 
                        <li>1. Eu Correrei</li>
                        <li>2. Digno é o Cordeiro</li>
                        <li>3. Exalto</li>
                        <li>4. Festa no Céu</li>
                        <li>5. Dono de Tudo</li>
                        <li>6. Yeshua</li>
                        <li>7. Maravilhoso</li>
                        <li>8. Jesus Te Ama</li>
                        <li>9. Voar</li>
                        <li>10. Quando o Céu Invade a Terra</li>
                        <li>11. Glória ao Cordeiro Santo</li>
                    </List>
                </Area2>
            </Canvas>
        </div>
    );
}

export default PageMusic;