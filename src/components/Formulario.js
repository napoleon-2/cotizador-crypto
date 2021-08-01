import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton = styled.div`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100px;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer
    }
`
const Formulario = () => {
    
    //state del listado de criptomonedas
    const [listaCripto, guardarCriptomonedas] = useState([]);
    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de estados unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra esterlina'}
    ]
    
    //Utilizar useMoneda
    const [moneda, SelectMonedas, ] = useMoneda('Elije tu moneda', '', MONEDAS);
    // utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] =useCriptomoneda('Elije tu criptomoneda', '');

    //ejecutar llamado a la api 
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        
            const resultado = await axios.get(url);
            console.log(resultado.data.Data);

            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();

    }, []);

    return ( 
        <form>
            <SelectMonedas /> 

            <SelectCripto />

            <Boton 
                type="submit"
                value="Calcular"
            /> 
        </form>
     );
}
 
export default Formulario;