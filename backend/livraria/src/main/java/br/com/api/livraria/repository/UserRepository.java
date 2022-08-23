package br.com.api.livraria.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.livraria.model.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long>{
  
}
