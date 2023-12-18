package com.example.api.service;

import com.example.api.entity.Slider;

import java.util.List;

public interface SliderService {
    Slider createSlider(Slider slider);

    Slider getSliderById(Long sliderId);

    List<Slider> getAllSliders();

    Slider updateSlider(Slider slider);

    void deleteSlider(Long sliderId);
}
