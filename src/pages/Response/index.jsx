import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as C from './style';

export const Response = () => {
    
    const [cepInfo, setCepInfo] = useState([]);

    const params = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        fetchCep();
    }, []);

    const fetchCep = async () => {
        const { data } = await axios.get(`https://viacep.com.br/ws/${params.cep}/json/`)
        setCepInfo(data);
    }

    const handleBack = () => {
        navigate('/')
    }
    
    return (
        <C.Container>
            {cepInfo.erro == true && 
                <>
                    <h2>CEP não encontrado</h2>
                    <p>Clique em "Nova Pesquisa" para pesquisar novamente.</p>
                </>
            }

            {cepInfo.erro == null && 
                <>
                    <table id='table-desktop'>
                        <thead>
                            <tr>
                                <th>Logradouro/Nome</th>
                                <th>Bairro/Distrito</th>
                                <th>Localidade/UF</th>
                                <th>CEP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{cepInfo.logradouro}</td>
                                <td>{cepInfo.bairro}</td>
                                <td>{cepInfo.localidade}</td>
                                <td>{cepInfo.cep}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table id='table-mobile'>
                        <tr>
                            <th>Logradouro/Nome</th>
                            <td>{cepInfo.logradouro}</td>
                            <th>Bairro/Distrito</th>
                            <td>{cepInfo.bairro}</td>
                            <th>Localidade/UF</th>
                            <td>{cepInfo.localidade}</td>
                            <th>CEP</th>
                            <td>{cepInfo.cep}</td>
                        </tr>    
                    </table>  
                </>
            }
            <button onClick={handleBack}>Nova Pesquisa</button>
        </C.Container>
    )
}