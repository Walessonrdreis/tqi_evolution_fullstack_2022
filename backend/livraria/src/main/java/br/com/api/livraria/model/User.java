package br.com.api.livraria.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="usuarios")

public class User {

  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY)
  private long id;

  private String username;
  private String password;
  private String pais;
  private String estado;
  private String cidade;
  private String endereco;
  private String email;
  private String telefone;
  @Column(unique = true)
  private String cpf;

}
