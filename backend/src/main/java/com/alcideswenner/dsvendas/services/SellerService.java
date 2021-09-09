package com.alcideswenner.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alcideswenner.dsvendas.dto.SellerDTO;
import com.alcideswenner.dsvendas.entities.Seller;
import com.alcideswenner.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	@Autowired
	private SellerRepository repository;

	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());// retornar todos os dados da lista
	}
}
