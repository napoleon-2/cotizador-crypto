import React from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (main-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.div`
  max-width: 100%;
  margin-top: 5rem;
`
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`
function App() {
  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen cripto"
        />
      </div>
        <Heading>
          Cotiza Tus Criptomonedas
        </Heading>
      <div>
        
      </div>
    </Contenedor>
  );
}

export default App;
