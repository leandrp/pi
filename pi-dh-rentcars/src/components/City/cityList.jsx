import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CityList() {
  const [capitais, setCapitais] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [termoPesquisa, setTermoPesquisa] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://raw.githubusercontent.com/robertomacedo/br-airports/master/airports.csv');
      const aeroportos = response.data.split('\n').map(linha => linha.split(','));
      const cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Salvador'];
      const aeroportosFiltrados = aeroportos.filter(aeroporto => cidades.includes(aeroporto[8]));
      const capitais = aeroportosFiltrados.filter(aeroporto => aeroporto[2] === 'large_airport').reduce((acc, curr) => {
        const estado = curr[9].substring(3);
        if (!acc[estado]) {
          acc[estado] = {
            estado: estado,
            cidades: [],
          };
        }
        if (!acc[estado].cidades.some(cidade => cidade.municipio === curr[8])) {
          acc[estado].cidades.push({
            municipio: curr[8],
            nome: curr[1],
            latitude: curr[4],
            longitude: curr[5],
          });
        }
        return acc;
      }, {});
      setCapitais(Object.values(capitais).flatMap(estado => estado.cidades));
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    setCidadeSelecionada(event.target.value);
  };

  const handlePesquisa = (event) => {
    setTermoPesquisa(event.target.value);
  };

  const capitaisFiltradas = capitais.filter(capital => capital.municipio.toLowerCase().includes(termoPesquisa.toLowerCase()));

  return (
    <div>
      <h1>Capitais com Aeroporto no Brasil</h1>
      <label htmlFor="cidade">Selecione uma cidade:</label>
      <select id="cidade" value={cidadeSelecionada} onChange={handleChange}>
        <option value="">Todas as Cidades</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Belo Horizonte">Belo Horizonte</option>
        <option value="Brasília">Brasília</option>
        <option value="Salvador">Salvador</option>
      </select>
      <br />
      <label htmlFor="pesquisa">Pesquisar:</label>
      <input type="text" id="pesquisa" value={termoPesquisa} onChange={handlePesquisa} />
      <br />
      <ul>
        {capitaisFiltradas.filter(capital => !cidadeSelecionada || capital.municipio === cidadeSelecionada).map(capital => (
          <li key={capital.nome}>
            <strong>{capital.nome}</strong> - {capital.municipio} ({capital.latitude}, {capital.longitude})
          </li>
        ))}
      </ul>
    </div>
  )
}
