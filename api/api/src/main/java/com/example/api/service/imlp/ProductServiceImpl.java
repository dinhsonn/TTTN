package com.example.api.service.imlp;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.api.entity.Product;
import com.example.api.repository.ProductRepository;
import com.example.api.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.orElse(null); // Hoặc có thể xử lý theo ý của bạn
    }
    

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).orElse(null);
    
        if (existingProduct != null) {
            existingProduct.setName(product.getName());
            existingProduct.setSlug(product.getSlug());
            existingProduct.setImage(product.getImage());
            existingProduct.setCategoryId(product.getCategoryId());
            existingProduct.setBrandId(product.getBrandId());
            existingProduct.setMetakey(product.getMetakey());
            existingProduct.setMetadesc(product.getMetadesc());
            existingProduct.setCreatedAt(product.getCreatedAt());
            existingProduct.setUpdatedAt(product.getUpdatedAt());
            existingProduct.setCreatedBy(product.getCreatedBy());
            existingProduct.setUpdatedBy(product.getUpdatedBy());
            existingProduct.setStatus(product.getStatus());
    
            // Include the update logic for price, qty, and description
            existingProduct.setPrice(product.getPrice());
            existingProduct.setQty(product.getQty());
            existingProduct.setDescription(product.getDescription());
    
            Product updatedProduct = productRepository.save(existingProduct);
            return updatedProduct;
        } else {
            return null;
        }
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }
}
