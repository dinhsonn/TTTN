package com.example.api.repository;

import com.example.api.entity.Slider;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SliderRepository extends JpaRepository<Slider, Long> {
        Page<Slider> findAll(Pageable pageable);

}
