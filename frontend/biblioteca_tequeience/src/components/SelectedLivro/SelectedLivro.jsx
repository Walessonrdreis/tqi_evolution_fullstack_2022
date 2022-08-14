import React,{useEffect, useState} from 'react';
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';
import Button from "../../components/Button/Button"
import Navbar from '../../components/Navbar/Navbar';
import {setObjLivro,livros,setlivros,objLivro,setbtnCadastrar, livro} from '../../pages/Signbooks'



const selectedLivro = (indice) => {

  setObjLivro(livros[indice])
  setbtnCadastrar(false);//ocultar cadastrar para aparecer os outros botões de ação
  
}

export default selectedLivro