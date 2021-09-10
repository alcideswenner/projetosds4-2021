package com.alcideswenner.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alcideswenner.dsvendas.dto.SaleDTO;
import com.alcideswenner.dsvendas.dto.SaleSucessDTO;
import com.alcideswenner.dsvendas.dto.SaleSumDTO;
import com.alcideswenner.dsvendas.entities.Sale;
import com.alcideswenner.dsvendas.repositories.SaleRepository;
import com.alcideswenner.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;// jpa
	@Autowired
	private SellerRepository sellersRepository;

	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupBySeller() {
		return repository.amountGroupBySeller();
	}

	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellersRepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}

	@Transactional(readOnly = true)
	public List<SaleSucessDTO> sucessGropedBySeller() {
		return repository.sucessGroupedBySeller();
	}
}
