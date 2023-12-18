package com.example.api.controller;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.api.entity.ProductStore;
import com.example.api.service.ProductStoreService;

@RestController
@AllArgsConstructor
@RequestMapping("api/productstore")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")
public class ProductStoreController {

    private ProductStoreService productStoreService;

    @PostMapping
    public ResponseEntity<ProductStore> createProductStore(@RequestBody ProductStore productStore) {
        ProductStore savedProductStore = productStoreService.createProductStore(productStore);
        return new ResponseEntity<>(savedProductStore, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductStore> getProductStoreById(@PathVariable("id") Long productStoreId) {
        ProductStore productStore = productStoreService.getProductStoreById(productStoreId);
        if (productStore != null) {
            return new ResponseEntity<>(productStore, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<Page<ProductStore>> getAllProductStores(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ProductStore> productStores = productStoreService.getAllProductStores(pageable);
        return new ResponseEntity<>(productStores, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductStore> updateProductStore(@PathVariable("id") Long productStoreId,
            @RequestBody ProductStore productStore) {
        productStore.setId(productStoreId);
        ProductStore updatedProductStore = productStoreService.updateProductStore(productStore);
        return new ResponseEntity<>(updatedProductStore, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProductStore(@PathVariable("id") Long productStoreId) {
        productStoreService.deleteProductStore(productStoreId);
        return new ResponseEntity<>("ProductStore successfully deleted!", HttpStatus.OK);
    }
}
