package com.example.api.controller;

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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.api.entity.Slider;
import com.example.api.service.SliderService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/sliders")
@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "Content-Range")
public class SliderController {

    private SliderService sliderService;

    // Create Slider REST API
    @PostMapping
    public ResponseEntity<Slider> createSlider(@RequestBody Slider slider) { // Rename the method
        slider.setImage(slider.getImage() + ".png");
        Slider savedSlider = sliderService.createSlider(slider); // Rename the service method
        return new ResponseEntity<>(savedSlider, HttpStatus.CREATED);
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

    // Get Slider by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Slider> getSliderById(@PathVariable("id") Long sliderId) { // Rename the method and parameter
        Slider slider = sliderService.getSliderById(sliderId); // Rename the service method
        if (slider != null) {
            return new ResponseEntity<>(slider, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

// Get All Sliders REST API
@GetMapping
public ResponseEntity<List<Slider>> getAllSliders() {
    List<Slider> sliders = sliderService.getAllSliders(); // Đổi tên phương thức dịch vụ nếu cần
    return new ResponseEntity<>(sliders, HttpStatus.OK);
}


    // Update Slider REST API
    @PutMapping("{id}")
    public ResponseEntity<Slider> updateSlider(@PathVariable("id") Long sliderId,
            @RequestBody Slider slider) { // Rename the method and parameter
        slider.setId(sliderId);
        Slider updatedSlider = sliderService.updateSlider(slider); // Rename the service method
        return new ResponseEntity<>(updatedSlider, HttpStatus.OK);
    }

    // Delete Slider REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSlider(@PathVariable("id") Long sliderId) { // Rename the parameter
        sliderService.deleteSlider(sliderId); // Rename the service method
        return new ResponseEntity<>("Slider successfully deleted!", HttpStatus.OK);
    }
}
