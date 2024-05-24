package com.ibrahim.mappingservice.service;

import com.ibrahim.mappingservice.model.HeritageSite;
import com.ibrahim.mappingservice.repository.HeritageSiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeritageSiteService {

    @Autowired
    private HeritageSiteRepository heritageSiteRepository;

    public List<HeritageSite> findAll() {
        return heritageSiteRepository.findAll();
    }

    public HeritageSite save(HeritageSite site) {
        return heritageSiteRepository.save(site);
    }

}
