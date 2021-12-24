import React from 'react';
import SepsisImage from "../images/sepsis-image.png";
import styled from 'styled-components';

const Images = styled.div`
text-align: center;
`

const Sepsis = () => {

    return (
        <Images>
            <img src={SepsisImage} height={700}/>
        </Images>
        
    )
        
  }
  export default Sepsis