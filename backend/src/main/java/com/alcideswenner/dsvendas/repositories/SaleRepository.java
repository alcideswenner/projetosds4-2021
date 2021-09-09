package com.alcideswenner.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alcideswenner.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
