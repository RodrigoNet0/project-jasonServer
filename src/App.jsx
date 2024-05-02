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
      <h1 className="container-name">Your clients <CgMathPlus/></h1>
      {pessoas.map((pessoa) => (
        <div key={pessoa.id}>
          <img src={pessoa.imagem} alt={pessoa.nome} />
          <h2>{pessoa.nome}</h2>
          <p>{pessoa.descricao}</p>
          <p>Idade: {pessoa.idade}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
