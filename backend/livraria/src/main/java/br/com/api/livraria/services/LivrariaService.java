package br.com.api.livraria.services;

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
  private LivrariaRepository lr;

  @Autowired
  private AnswerModel message;



  //metodo para listar todos os livros
 
  public Iterable<LivrariaModel> listar(){
    return  lr.findAll();
    
  }
  
  //Metodo para cadastrar ou alterar livros
  public ResponseEntity<?> cadastrarAlterar(LivrariaModel lm, String acao){
    if(lm.getTitulo().equals("")){
      message.setMensagem("O nome do titulo é obrigatório !");
      return  new  ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    }else if(lm.getAutor().equals("")){
      message.setMensagem("O Nome do Autor é obrigatório!");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    }else if(lm.getEditora().equals("")){
      message.setMensagem("O Nome da Editora é obrigatório!");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    } else if(lm.getImg().equals(null)){
      message.setMensagem("A imagem do livro é Obrigatória!");
      return new ResponseEntity<AnswerModel>(message, HttpStatus.BAD_REQUEST);
    } if(acao.equals("cadastrar")){
      return new ResponseEntity<LivrariaModel>(lr.save(lm),HttpStatus.CREATED);
      
    }else{
      return new ResponseEntity<LivrariaModel>(lr.save(lm),HttpStatus.OK);

    }
    
    
  }


}
