package br.com.api.livraria.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.livraria.model.LivrariaModel;

@Repository
public interface LivrariaRepository extends CrudRepository<LivrariaModel, Long> {//modelo e tipo do Id
  
}
