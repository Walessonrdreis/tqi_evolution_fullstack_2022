package br.com.api.livraria.services;

import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.livraria.model.AnswerModel;
import br.com.api.livraria.model.LivrariaModel;
import br.com.api.livraria.repository.LivrariaRepository;

@Service
public class LivrariaService {

  @Autowired
  private LivrariaRepository livrariaRepository;

  @Autowired
  private AnswerModel message;

  // metodo para listar todos os livros

  public Iterable<LivrariaModel> listar() {
    return livrariaRepository.findAll();}

  
  public Optional<LivrariaModel> bookDetail(long id) {
    return livrariaRepository.findById(id);

  }

  @Autowired
  private LivrariaRepository lRepository;

  // Metodo para cadastrar ou alterar livros
  public ResponseEntity<?> cadastrarAlterar(LivrariaModel livrariaModel, String acao) {
    if (livrariaModel.getTitulo().equals("")) {
      message.setMensagem("O nome do titulo é obrigatório !");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    } else if (livrariaModel.getAutor().equals("")) {
      message.setMensagem("O Nome do Autor é obrigatório!");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    } else if (livrariaModel.getEditora().equals("")) {
      message.setMensagem("O Nome da Editora é obrigatório!");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    } else if (livrariaModel.getImg().equals(null)) {
      message.setMensagem("A imagem do livro é Obrigatória!");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    } else if (livrariaModel.getPreco().equals(0)) {
      message.setMensagem("O preço do livro é Obrigatória!");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    } else {
      if (acao.equals("cadastrar")) {
        return new ResponseEntity<LivrariaModel>(livrariaRepository.save(livrariaModel), HttpStatus.CREATED);//cadastrar

      } else {
        return new ResponseEntity<LivrariaModel>(livrariaRepository.save(livrariaModel), HttpStatus.OK);//alterar

      }
    }

  }

  //Método para formatar produtos

  public ResponseEntity<AnswerModel> remover(long id){
    livrariaRepository.deleteById(id);//Deleta através do ID

    message.setMensagem("O livro foi Removido com sucesso");
    return new ResponseEntity<AnswerModel>(message, HttpStatus.OK);
  }
}