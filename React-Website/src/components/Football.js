import React from 'react';
import FootballImage from "../images/football-image.png";
import styled from 'styled-components';

const Images = styled.div`
text-align: center;
`

const Football = () => {

    return (
        <Images>
            <img src={FootballImage} height={700}/>
        </Images>
        
    )
        
  }
  export default Football