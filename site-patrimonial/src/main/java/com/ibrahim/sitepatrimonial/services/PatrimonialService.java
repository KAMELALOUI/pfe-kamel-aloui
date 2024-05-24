package com.ibrahim.sitepatrimonial.services;

import com.ibrahim.sitepatrimonial.models.patrimonial;
import com.ibrahim.sitepatrimonial.repository.PatrimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatrimonialService {
    @Autowired
    private PatrimonialRepository patrimonialRepository;

    @Autowired

    public List<patrimonial> findAll() {
        return patrimonialRepository.findAll();
    }

    public patrimonial save(patrimonial sitePatrimonial) {
        return patrimonialRepository.save(sitePatrimonial);
    }
    public List<patrimonial> searchByNom(String nom) {
        return patrimonialRepository.findByNomContainingIgnoreCase(nom);
    }

    public List<patrimonial> searchByLocalisation(String localisation) {
        return patrimonialRepository.findByLocalisationContainingIgnoreCase(localisation);
    }

    public List<patrimonial> searchByDescription(String keyword) {
        return patrimonialRepository.searchByDescription(keyword);
    }

}
