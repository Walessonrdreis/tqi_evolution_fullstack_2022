
import React from 'react'

const Form = () => {
  return (
    <form>
      <input type='text' placeholder='Título' className='form-control' />
      <input type='text' placeholder='Autor' className='form-control' />
      <input type='text' placeholder='Editora' className='form-control' />
      <label>Insira a imagem do livro</label>
      <input type="file" accept="image/*" className='form-control'/>
      <input type="button" value="Cadastrar" className='btn btn-primary'/>
      <input type="button" value="Alterar" className='btn btn-warning'/>
      <input type="button" value="Deletar" className='btn btn-danger'/>
      <input type="button" value="Cancelar" className='btn btn-secondary'/>
      
    </form>
  )
}

export default Form;