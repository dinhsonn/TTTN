package com.example.api.service.imlp;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.api.entity.ProductOptionValue;
import com.example.api.service.ProductOptionValueService;
import com.example.api.repository.ProductOptionValueRepository; // Đảm bảo sửa đổi repository nếu cần

import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductOptionValueServiceImpl implements ProductOptionValueService {

    private ProductOptionValueRepository productOptionValueRepository; // Đảm bảo sửa đổi repository nếu cần

    @Override
    public ProductOptionValue createProductOptionValue(ProductOptionValue productOptionValue) {
        return productOptionValueRepository.save(productOptionValue);
    }

    @Override
    public ProductOptionValue getProductOptionValueById(Long productOptionValueId) {
        Optional<ProductOptionValue> optionalProductOptionValue = productOptionValueRepository.findById(productOptionValueId);
        return optionalProductOptionValue.orElse(null);
    }

    @Override
    public Page<ProductOptionValue> getAllProductOptionValues(Pageable pageable) {
        return productOptionValueRepository.findAll(pageable);
    }

    @Override
    public ProductOptionValue updateProductOptionValue(ProductOptionValue productOptionValue) {
        ProductOptionValue existingProductOptionValue = productOptionValueRepository.findById(productOptionValue.getId()).orElse(null);

        if (existingProductOptionValue != null) {
            existingProductOptionValue.setProductId(productOptionValue.getProductId());
            existingProductOptionValue.setOption(productOptionValue.getOption());
            existingProductOptionValue.setValue(productOptionValue.getValue());
            existingProductOptionValue.setCreatedAt(productOptionValue.getCreatedAt());
            existingProductOptionValue.setUpdatedAt(productOptionValue.getUpdatedAt());

            ProductOptionValue updatedProductOptionValue = productOptionValueRepository.save(existingProductOptionValue);
            return updatedProductOptionValue;
        } else {
            // Handle the case where the product option value with the given ID is not found.
            return null;
        }
    }

    @Override
    public void deleteProductOptionValue(Long productOptionValueId) {
        productOptionValueRepository.deleteById(productOptionValueId);
    }
}
