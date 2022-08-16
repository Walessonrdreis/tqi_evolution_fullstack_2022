package br.com.api.livraria.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import br.com.api.livraria.model.AnswerModel;
import br.com.api.livraria.model.LivrariaModel;
import br.com.api.livraria.services.LivrariaService;


@RestController
@CrossOrigin(origins="*")//resolver problema CORS quando as portas são diferentes e entram em conflito react ...3000 e spring... 
public class LivrariaController {

  @Autowired
  private LivrariaService ls;

  // @GetMapping(value = "/bookDetail/{id}")
  // public ResponseEntity<LivrariaModel> findById(@PathVariable long id){
  //   LivrariaModel obj = ls.findById(id);
  //   return ResponseEntity.ok().body(obj);

  // }

  @DeleteMapping("/remover/{id}")//Além de adicionar a rota, eu tenho que saber qual o id, é necessário adicionar o id
  //Estou pegando da url uma informação e a tratando como variável
  //remover sempre retorna mensagem 
  public ResponseEntity<AnswerModel> remover(@PathVariable long id){ //dentro do parâmetro do método é preciso capturar a informação id via URL
    //Para isso tem a anotação @PathVariable
    return ls.remover(id);
  }
  @PutMapping("/alterar")
  public ResponseEntity<?> alterar(@RequestBody LivrariaModel lm){
      return ls.cadastrarAlterar(lm, "alterar");
  }
  @PostMapping("/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody LivrariaModel lm){
    return ls.cadastrarAlterar(lm, "cadastrar");
  }
  @GetMapping("/listar")
  public Iterable<LivrariaModel> listar(){
    return ls.listar();
  }
  
  @GetMapping("/bookDetail/{id}")
  public Optional<LivrariaModel> bookDetail(@PathVariable long id){
    return ls.bookDetail(id);
  }

  @GetMapping("/")
  public String rota(){
    return "API de livros funcionando";
  }
}
