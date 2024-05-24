package com.ibrahim.sitepatrimonial.repository;

import com.ibrahim.sitepatrimonial.models.patrimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatrimonialRepository extends JpaRepository<patrimonial, Long> {

    List<patrimonial> findByNomContainingIgnoreCase(String nom);

    List<patrimonial> findByLocalisationContainingIgnoreCase(String localisation);

    @Query("SELECT s FROM patrimonial s WHERE LOWER(s.descriptionHistorique) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<patrimonial> searchByDescription(@Param("keyword") String keyword);
}