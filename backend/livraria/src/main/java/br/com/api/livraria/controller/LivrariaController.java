package br.com.api.livraria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.livraria.model.LivrariaModel;
import br.com.api.livraria.services.LivrariaService;


@RestController
public class LivrariaController {



  @Autowired
  private LivrariaService ls;

  @PostMapping("/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody LivrariaModel lm){
      return ls.cadastrarAlterar(lm, "cadastrar");
  }

  @GetMapping("/listar")
  public Iterable<LivrariaModel> listar(){
    return ls.listar();
  }
  
  @GetMapping("/")
  public String rota(){
    return "API de livros funcionando";
  }
}
