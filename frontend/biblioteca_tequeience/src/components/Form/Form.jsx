
import React from 'react'

const Form = () => {
  return (
    <form>
      <input type='text' placeholder='Título' />
      <input type='text' placeholder='Autor' />
      <input type='text' placeholder='Editora' />
      <label>Insira a imagem do livro</label>
      <input type="file" accept="image/*"/>
      <input type="button" value="Cadastrar"/>
      <input type="button" value="Alterar"/>
      <input type="button" value="Remover"/>
      <input type="button" value="Cancelar"/>
      
    </form>
  )
}

export default Form;