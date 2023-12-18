package com.example.api.controller;

import lombok.AllArgsConstructor;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.api.entity.ProductImage;
import com.example.api.service.ProductImageService;


@RestController
@AllArgsConstructor
@RequestMapping("api/productimages") // Change the mapping
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")
public class ProductImageController { // Rename the class

    private ProductImageService productImageService; // Rename the service

    // Create ProductImage REST API
    @PostMapping
    public ResponseEntity<ProductImage> createProductImage(@RequestBody ProductImage productImage) { // Rename the method
        productImage.setImage(productImage.getImage() + ".png");
        ProductImage savedProductImage = productImageService.createProductImage(productImage); // Rename the service method
        return new ResponseEntity<>(savedProductImage, HttpStatus.CREATED);
    }

    @PostMapping("/image")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file,
            @RequestParam("customName") String customName) {
        try {
            String uploadDir = "E:\\Downloads\\api\\api\\src\\main\\resources\\static\\dataImage"; // Set your desired directory path

            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String filePath = uploadDir + File.separator + customName + ".png";

            try (FileOutputStream fos = new FileOutputStream(filePath)) {
                fos.write(file.getBytes());
            }
            return ResponseEntity.ok("Image uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image");
        }
    }

    @GetMapping("/image/{imageName}")
    public ResponseEntity<byte[]> getImage(@PathVariable String imageName) throws IOException {

        Resource resource = new ClassPathResource("E:\\Downloads\\api\\api\\src\\main\\resources\\static\\dataImage\\" + imageName);
        byte[] imageBytes = Files.readAllBytes(resource.getFile().toPath());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Set the appropriate image media type

        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    // Get ProductImage by id REST API
    @GetMapping("{id}")
    public ResponseEntity<ProductImage> getProductImageById(@PathVariable("id") Long productImageId) { // Rename the method and parameter
        ProductImage productImage = productImageService.getProductImageById(productImageId); // Rename the service method
        if (productImage != null) {
            return new ResponseEntity<>(productImage, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<ProductImage>> getAllProductImages() {
        List<ProductImage> productImages = productImageService.getAllProductImages(); // Rename the service method
        return new ResponseEntity<>(productImages, HttpStatus.OK);
    }

    // Update ProductImage REST API
    @PutMapping("{id}")
    public ResponseEntity<ProductImage> updateProductImage(@PathVariable("id") Long productImageId,
            @RequestBody ProductImage productImage) { 
        productImage.setId(productImageId);
        ProductImage updatedProductImage = productImageService.updateProductImage(productImage); // Rename the service method
        return new ResponseEntity<>(updatedProductImage, HttpStatus.OK);
    }

    // Delete ProductImage REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProductImage(@PathVariable("id") Long productImageId) { // Rename the parameter
        productImageService.deleteProductImage(productImageId); // Rename the service method
        return new ResponseEntity<>("ProductImage successfully deleted!", HttpStatus.OK);
    }
}
