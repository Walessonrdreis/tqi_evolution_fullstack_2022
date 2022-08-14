package br.com.api.livraria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name= "bookmarks")
@Getter
@Setter
public class Bookmarks {
  
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY)
  private long id;
  private String Romance;
  private String Comedia;
  private String Tecnologia;
  private String Infantil;

}
