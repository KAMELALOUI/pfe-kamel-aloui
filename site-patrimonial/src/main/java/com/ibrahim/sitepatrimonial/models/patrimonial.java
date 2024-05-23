package com.ibrahim.sitepatrimonial.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Entity
@Table(name = "patrimonial")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class patrimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String localisation;
    @Column(length = 5000)
    private String descriptionHistorique;



}
