package com.ibrahim.mappingservice.controller;

import com.ibrahim.mappingservice.model.HeritageSite;
import com.ibrahim.mappingservice.service.HeritageSiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/heritage")
public class HeritageSiteController {

    @Autowired
    private HeritageSiteService heritageSiteService;

    @GetMapping
    public List<HeritageSite> getAllSites() {
        return heritageSiteService.findAll();
    }

    @PostMapping
    public HeritageSite createSite(@RequestBody HeritageSite site) {
        return heritageSiteService.save(site);
    }
}