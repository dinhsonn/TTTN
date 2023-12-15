package com.example.api.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.api.entity.Product;


public interface ProductService {
    public Product createProduct(Product product);
    public Product getProductById(Long productId);
    public Page<Product> getAllProducts(Pageable pageable);
    public Product updateProduct(Product product);
    public void deleteProduct(Long productId);}

