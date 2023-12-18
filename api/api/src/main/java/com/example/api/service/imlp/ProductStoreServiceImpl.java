package com.example.api.service.imlp;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.api.entity.ProductStore;
import com.example.api.service.ProductStoreService;
import com.example.api.repository.ProductStoreRepository; // Đảm bảo sửa đổi repository nếu cần

import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductStoreServiceImpl implements ProductStoreService {

    private ProductStoreRepository productStoreRepository; // Đảm bảo sửa đổi repository nếu cần

    @Override
    public ProductStore createProductStore(ProductStore productStore) {
        return productStoreRepository.save(productStore);
    }

    @Override
    public ProductStore getProductStoreById(Long productStoreId) {
        Optional<ProductStore> optionalProductStore = productStoreRepository.findById(productStoreId);
        return optionalProductStore.orElse(null);
    }

    @Override
    public Page<ProductStore> getAllProductStores(Pageable pageable) {
        return productStoreRepository.findAll(pageable);
    }

    @Override
    public ProductStore updateProductStore(ProductStore productStore) {
        ProductStore existingProductStore = productStoreRepository.findById(productStore.getId()).orElse(null);

        if (existingProductStore != null) {
            existingProductStore.setProductId(productStore.getProductId());
            existingProductStore.setQuantityAdded(productStore.getQuantityAdded());
            existingProductStore.setEntryDate(productStore.getEntryDate());
            existingProductStore.setCreatedAt(productStore.getCreatedAt());
            existingProductStore.setUpdatedAt(productStore.getUpdatedAt());
            existingProductStore.setCreatedBy(productStore.getCreatedBy());
            existingProductStore.setUpdatedBy(productStore.getUpdatedBy());
            existingProductStore.setStatus(productStore.getStatus());

            ProductStore updatedProductStore = productStoreRepository.save(existingProductStore);
            return updatedProductStore;
        } else {
            // Handle the case where the product store with the given ID is not found.
            return null;
        }
    }

    @Override
    public void deleteProductStore(Long productStoreId) {
        productStoreRepository.deleteById(productStoreId);
    }
}
