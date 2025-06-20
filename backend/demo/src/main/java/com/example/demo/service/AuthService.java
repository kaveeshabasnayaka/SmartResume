package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<?> register(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        
        userRepository.save(user);
        return ResponseEntity.ok("User registered");
    }

    public ResponseEntity<?> login(User user) {
        Optional<User> found = userRepository.findByEmail(user.getEmail());

        if (found.isPresent() && found.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("{\"token\": \"demo-token\"}");
        }

        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

