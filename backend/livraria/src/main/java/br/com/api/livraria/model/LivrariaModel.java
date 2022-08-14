package br.com.api.livraria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="livraria")
@Getter
@Setter

public class LivrariaModel {


  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY)
  private Long id;
  private String titulo;
  private String autor;
  private String editora;
  private byte[] img;
  
}
