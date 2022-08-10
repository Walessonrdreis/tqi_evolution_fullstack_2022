
import React from 'react'

const Form = ({button, eventoTeclado, cadastrar}) => {
  return (
    <form>
      <input type='text' onChange={eventoTeclado} name='titulo' placeholder='Título' className='form-control' />
      <input type='text' onChange={eventoTeclado} name='autor' placeholder='Autor' className='form-control' />
      <input type='text' onChange={eventoTeclado} name='editora' placeholder='Editora' className='form-control' />
      <label>Insira a imagem do livro</label>
      <input type="file" onChange={eventoTeclado} name='img' accept="image/*" className='form-control'/>
      {
        button
        ?
      <input type="button" value="Cadastrar" onClick={cadastrar} className='btn btn-primary'/>
        :
        <>
      <input type="button" value="Alterar" className='btn btn-warning'/>
      <input type="button" value="Deletar" className='btn btn-danger'/>
      <input type="button" value="Cancelar" className='btn btn-secondary'/>

        </>
      }
      
    </form>
  )
}

export default Form;