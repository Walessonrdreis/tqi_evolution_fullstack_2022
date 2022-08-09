package br.com.api.livraria.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LivrariaController {

  
  @GetMapping("/")
  public String rota(){
    return "API de livros funcionando";
  }
}
