package com.example.api.service.imlp;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.api.entity.Slider;
import com.example.api.repository.SliderRepository;
import com.example.api.service.SliderService;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SliderServiceImpl implements SliderService {

    private final SliderRepository sliderRepository;

    @Override
    public Slider createSlider(Slider slider) {
        return sliderRepository.save(slider);
    }

    @Override
    public Slider getSliderById(Long sliderId) {
        Optional<Slider> optionalSlider = sliderRepository.findById(sliderId);
        return optionalSlider.orElse(null);
    }

    @Override
    public List<Slider> getAllSliders() {
        return sliderRepository.findAll();
    }

    @Override
    public Slider updateSlider(Slider slider) {
        Slider existingSlider = sliderRepository.findById(slider.getId()).orElse(null);
        if (existingSlider != null) {
            existingSlider.setName(slider.getName());
            existingSlider.setLink(slider.getLink());
            existingSlider.setSortOrder(slider.getSortOrder());
            existingSlider.setUpdatedAt(slider.getUpdatedAt());
            existingSlider.setCreatedBy(slider.getCreatedBy());
            existingSlider.setUpdatedBy(slider.getUpdatedBy());
            existingSlider.setStatus(slider.getStatus());
            existingSlider.setImage(slider.getImage());
            existingSlider.setPosition(slider.getPosition());

            return sliderRepository.save(existingSlider);
        }
        return null;
    }

    @Override
    public void deleteSlider(Long sliderId) {
        sliderRepository.deleteById(sliderId);
    }
}
