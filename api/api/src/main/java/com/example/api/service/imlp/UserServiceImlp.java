package com.example.api.service.imlp;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.api.entity.User;
import com.example.api.repository.UserRepository;
import com.example.api.service.UserService;

import java.util.Date;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImlp implements UserService { 

    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        user.setCreatedAt(new Date()); // Set created timestamp
        user.setUpdatedAt(new Date()); // Set updated timestamp
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setAddress(user.getAddress());
        existingUser.setImage(user.getImage());
        existingUser.setRoles(user.getRoles());
        existingUser.setStatus(user.getStatus());
        User updatedUser = userRepository.save(existingUser);
        return updatedUser;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}

