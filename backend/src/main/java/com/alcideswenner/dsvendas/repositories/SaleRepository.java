package com.alcideswenner.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.alcideswenner.dsvendas.dto.SaleSucessDTO;
import com.alcideswenner.dsvendas.dto.SaleSumDTO;
import com.alcideswenner.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	@Query("SELECT new com.alcideswenner.dsvendas.dto.SaleSumDTO(obj.seller,SUM(obj.amount))"
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupBySeller();

	@Query("SELECT new com.alcideswenner.dsvendas.dto.SaleSucessDTO(obj.seller,SUM(obj.visited),SUM(obj.deals))"
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSucessDTO> sucessGroupedBySeller();
}
