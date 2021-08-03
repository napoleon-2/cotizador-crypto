import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './criptojpg.jpg';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  @media (main-width: 992px){
    display: grid;
    grid-template-columns: auto auto auto auto;
    
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 3rem;
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

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    
      const cotizarCriptomoneda = async () => { 
      //evitamos la ejecucion la primera vez
      if(moneda === '') return;
      console.log('cotizando...')
      //consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      //mostrar el spinner

      guardarCargando(true);
      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {
        //Cambiar el estado de cargando
        guardarCargando(false);
        //guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]); 

      }, 3000);

       
    } 
    cotizarCriptomoneda();

  }, [moneda, criptomoneda]);

  //mostrar de spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado}/>   
  
          
        
  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen cripto"
        />
      </div>
        
      <div>
        <Heading>
          Cotiza Tus Criptomonedas
        </Heading>
          
        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
          {componente}
        
      </div>
    </Contenedor>
  );
}

export default App;
