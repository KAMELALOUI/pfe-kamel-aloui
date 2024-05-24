package com.ibrahim.sitepatrimonial.controllers;

import com.ibrahim.sitepatrimonial.models.patrimonial;
import com.ibrahim.sitepatrimonial.services.PatrimonialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/sites")
public class PatrimonialController {

    @Autowired
    private PatrimonialService patrimonialService;



    @GetMapping
    public List<patrimonial> getAllSites() {
        return patrimonialService.findAll();
    }

    @PostMapping
    public patrimonial createSite(@RequestBody patrimonial sitePatrimonial) {
        return patrimonialService.save(sitePatrimonial);
    }


    @GetMapping("/search")
    public List<patrimonial> searchSites(
            @RequestParam(required = false) String nom,
            @RequestParam(required = false) String localisation,
            @RequestParam(required = false) String keyword) {
        if (nom != null && !nom.isEmpty()) {
            return patrimonialService.searchByNom(nom);
        } else if (localisation != null && !localisation.isEmpty()) {
            return patrimonialService.searchByLocalisation(localisation);
        } else if (keyword != null && !keyword.isEmpty()) {
            return patrimonialService.searchByDescription(keyword);
        } else {
            return patrimonialService.findAll();
        }
    }

}
