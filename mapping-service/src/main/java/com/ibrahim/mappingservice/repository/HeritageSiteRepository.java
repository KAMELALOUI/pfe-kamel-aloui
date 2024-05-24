package com.ibrahim.mappingservice.repository;

import com.ibrahim.mappingservice.model.HeritageSite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface HeritageSiteRepository extends JpaRepository<HeritageSite, Long> {
}
