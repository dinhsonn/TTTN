package com.example.api.controller;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.api.entity.ProductOptionValue;
import com.example.api.service.ProductOptionValueService;

@RestController
@AllArgsConstructor
@RequestMapping("api/productoptionvalue")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")
public class ProductOptionValueController {

    private ProductOptionValueService productOptionValueService; // Chắc chắn sửa đổi service nếu cần

    @PostMapping
    public ResponseEntity<ProductOptionValue> createProductOptionValue(@RequestBody ProductOptionValue productOptionValue) {
        ProductOptionValue savedProductOptionValue = productOptionValueService.createProductOptionValue(productOptionValue);
        return new ResponseEntity<>(savedProductOptionValue, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductOptionValue> getProductOptionValueById(@PathVariable("id") Long productOptionValueId) {
        ProductOptionValue productOptionValue = productOptionValueService.getProductOptionValueById(productOptionValueId);
        if (productOptionValue != null) {
            return new ResponseEntity<>(productOptionValue, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<Page<ProductOptionValue>> getAllProductOptionValues(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ProductOptionValue> productOptionValues = productOptionValueService.getAllProductOptionValues(pageable);
        return new ResponseEntity<>(productOptionValues, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductOptionValue> updateProductOptionValue(@PathVariable("id") Long productOptionValueId,
            @RequestBody ProductOptionValue productOptionValue) {
        productOptionValue.setId(productOptionValueId);
        ProductOptionValue updatedProductOptionValue = productOptionValueService.updateProductOptionValue(productOptionValue);
        return new ResponseEntity<>(updatedProductOptionValue, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProductOptionValue(@PathVariable("id") Long productOptionValueId) {
        productOptionValueService.deleteProductOptionValue(productOptionValueId);
        return new ResponseEntity<>("ProductOptionValue successfully deleted!", HttpStatus.OK);
    }
}

