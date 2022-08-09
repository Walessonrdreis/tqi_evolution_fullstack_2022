package br.com.api.livraria.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.livraria.model.LivrariaModel;
import br.com.api.livraria.repository.LivrariaRepository;

@Service
public class LivrariaService {

  @Autowired
  private LivrariaRepository lr;

  //metodo para listar todos os livros
 
  public Iterable<LivrariaModel> listar(){
    return  lr.findAll();
    
  }
  
}
