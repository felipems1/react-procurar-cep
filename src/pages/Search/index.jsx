import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.png';
import * as C from './style';

export const Search = () => {
    
    const navigate = useNavigate();
    const [cep, setCep] = useState('');

    const handleCepChange = (e) => {
        setCep(e.target.value);
    }

    const handleNext = () => {
        if(cep !== '') {
            navigate(`/${cep}`)
        } else {
            alert('Informe o CEP.')
        }
    }

    return (
        <C.Container>
            <header>
                <img src={icon} />
                <h1>Procurar<i>CEP</i></h1>
            </header>
            <main>
                <h3>Procure e encontre CEPS de todo o Brasil</h3>
                <p>Faça a procura e encontre o CEP desejado em um clique.</p>
                <input 
                    type="text"
                    onChange={handleCepChange}
                    placeholder='Informe o CEP'
                    maxLength={8}
                />    
                <button onClick={handleNext}>Procurar</button>
            </main>
        </C.Container>
    )
}