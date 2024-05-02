import { CgMathPlus } from "react-icons/cg";
import { CgChevronDown } from "react-icons/cg";
import './App.css'

import React, { useState, useEffect } from 'react';
import { getPessoas } from '../api.js';

const App = () => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    const fetchPessoas = async () => {
      const data = await getPessoas();
      setPessoas(data);
    };
    fetchPessoas();
  }, []);

  return (
    <div>
      <h1 className="container-name">Your clients <CgMathPlus size={50}/></h1>
      {pessoas.map((pessoa) => (
        <div key={pessoa.id} className="card">
          <img src={pessoa.imagem} alt={pessoa.nome} className="img" />
          <div className="infos">
            <h2 className="name-card">{pessoa.nome}</h2>
            <p>Idade: {pessoa.idade}</p>
            <p>{pessoa.descricao}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
