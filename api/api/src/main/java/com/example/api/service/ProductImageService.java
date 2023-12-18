package com.example.api.service;

import com.example.api.entity.ProductImage;
import java.util.List;

public interface ProductImageService {
    
    ProductImage createProductImage(ProductImage productImage);
    ProductImage getProductImageById(Long productImageId);
    List<ProductImage> getAllProductImages();
    ProductImage updateProductImage(ProductImage productImage);
    void deleteProductImage(Long productImageId);
}
