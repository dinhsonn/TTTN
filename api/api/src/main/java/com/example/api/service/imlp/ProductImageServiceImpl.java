package com.example.api.service.imlp;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.api.entity.ProductImage;
import com.example.api.repository.ProductImageRepository;
import com.example.api.service.ProductImageService;

import java.util.Optional;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductImageServiceImpl implements ProductImageService {

    private ProductImageRepository productImageRepository;

    @Override
    public ProductImage createProductImage(ProductImage productImage) {
        return productImageRepository.save(productImage);
    }

    @Override
    public ProductImage getProductImageById(Long productImageId) {
        Optional<ProductImage> optionalProductImage = productImageRepository.findById(productImageId);
        return optionalProductImage.orElse(null);
    }

    @Override
    public List<ProductImage> getAllProductImages() {
        return productImageRepository.findAll();
    }

    @Override
    public ProductImage updateProductImage(ProductImage productImage) {
        Optional<ProductImage> optionalExistingProductImage = productImageRepository.findById(productImage.getId());
        if (optionalExistingProductImage.isPresent()) {
            ProductImage existingProductImage = optionalExistingProductImage.get();
            existingProductImage.setProductId(productImage.getProductId());
            existingProductImage.setImage(productImage.getImage());
            existingProductImage.setIsPrimary(productImage.getIsPrimary());
            existingProductImage.setCreatedAt(productImage.getCreatedAt());
            existingProductImage.setUpdatedAt(productImage.getUpdatedAt());
            return productImageRepository.save(existingProductImage);
        }
        return null;
    }

    @Override
    public void deleteProductImage(Long productImageId) {
        productImageRepository.deleteById(productImageId);
    }
}
