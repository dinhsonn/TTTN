package com.example.api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.api.entity.ProductStore;


public interface ProductStoreService {
    
    public ProductStore createProductStore(ProductStore productStore);
    public ProductStore getProductStoreById(Long productStoreId);
    public Page<ProductStore> getAllProductStores(Pageable pageable);
    public ProductStore updateProductStore(ProductStore productStore);
    public void deleteProductStore(Long productStoreId);
}
