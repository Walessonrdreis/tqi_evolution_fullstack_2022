import React from 'react'

const Table = ({vetor, selecionar}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Editora</th>
          <th>Imagem</th>
          <th>Selecionar</th>
         
        </tr>
      </thead>
      <tbody>
        {
          vetor.map((obj, indice)=>(
        <tr key={indice}>{/*boa prática do react, toda vez que formos criar uma característica ela sera única, nesse caso pode ser o índice da linha */}
        <td>{indice+1}</td>
        <td>{obj.titulo}</td>
        <td>{obj.autor}</td>
        <td>{obj.editora}</td>
        <td>{obj.img}</td>
        <td><button onClick={() => {selecionar(indice)}} className='btn btn-success'>Selecionar</button></td> {/*toda função que tenha parâmetro deve ser passada como **arrow function** */}
        {/* O indice está sendo gerado pelo map */}
        {/* O map é como se fosse um laço de repetição */}

        </tr>
          ))
        }
      </tbody>

    </table>
  )
}

export default Table