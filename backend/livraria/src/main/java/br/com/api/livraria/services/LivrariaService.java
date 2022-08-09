package br.com.api.livraria.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.livraria.model.LivrariaModel;

@Service
public class LivrariaService {

  @Autowired
  private LivrariaService ls;

  //metodo para listar todos os livros

  public Iterable<LivrariaModel> listar(){
    return ls.findAll();
    
  }
  
}
