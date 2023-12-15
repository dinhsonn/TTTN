package com.example.api.service.imlp;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.api.entity.Category;
import com.example.api.repository.CategoryRepository;
import com.example.api.service.CategoryService;


import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        return optionalCategory.get();
    }

    @Override
    public Page<Category> getAllCategories(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }

    @Override
    public Category updateCategory(Category category) {
        Category existingCategory = categoryRepository.findById(category.getId()).get();
        existingCategory.setName(category.getName());
        existingCategory.setSlug(category.getSlug());
        existingCategory.setImage(category.getImage());
        existingCategory.setParentId(category.getParentId());
        existingCategory.setSortOrder(category.getSortOrder());
        existingCategory.setMetakey(category.getMetakey());
        existingCategory.setMetadesc(category.getMetadesc());
        existingCategory.setCreatedAt(category.getCreatedAt());
        existingCategory.setUpdatedAt(category.getUpdatedAt());
        existingCategory.setCreatedBy(category.getCreatedBy());
        existingCategory.setUpdatedBy(category.getUpdatedBy());
        existingCategory.setStatus(category.getStatus());
        Category updatedCategory = categoryRepository.save(existingCategory);
        return updatedCategory;
    }

    @Override
    public void deleteCategory(Long categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
