package com.example.api.service.imlp;

import com.example.api.entity.Brand;
import com.example.api.repository.BrandRepository;
import com.example.api.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class BrandServiceImpl implements BrandService {

    private final BrandRepository brandRepository;

    @Autowired
    public BrandServiceImpl(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    @Override
    public Brand createBrand(Brand brand) {
        brand.setCreatedAt(new Date());
        return brandRepository.save(brand);
    }

    @Override
    public Brand getBrandById(Long brandId) {
        Optional<Brand> optionalBrand = brandRepository.findById(brandId);
        return optionalBrand.orElse(null);
    }

    @Override
    public Page<Brand> getAllBrands(Pageable pageable) {
        return brandRepository.findAll(pageable);
    }

    @Override
    public Brand updateBrand(Brand brand) {
        Optional<Brand> optionalExistingBrand = brandRepository.findById(brand.getId());
        if (optionalExistingBrand.isPresent()) {
            Brand existingBrand = optionalExistingBrand.get();
            // Cập nhật thông tin Brand
            existingBrand.setName(brand.getName());
            existingBrand.setSlug(brand.getSlug());
            existingBrand.setImage(brand.getImage());
            existingBrand.setSortOrder(brand.getSortOrder());
            existingBrand.setMetakey(brand.getMetakey());
            existingBrand.setMetadesc(brand.getMetadesc());
            existingBrand.setCreatedAt(brand.getCreatedAt());
            existingBrand.setUpdatedAt(brand.getUpdatedAt());
            existingBrand.setCreatedBy(brand.getCreatedBy());
            existingBrand.setUpdatedBy(brand.getUpdatedBy());
            existingBrand.setStatus(brand.getStatus());

            // Lưu Brand cập nhật vào cơ sở dữ liệu
            return brandRepository.save(existingBrand);
        } else {
            return null; // Brand không tồn tại
        }
    }

    @Override
    public void deleteBrand(Long brandId) {
        brandRepository.deleteById(brandId);
    }

    @Override
    public boolean isBrandIdExists(Long brandId) {
        Optional<Brand> existingBrand = brandRepository.findById(brandId);
        return existingBrand.isPresent();
    }
}
