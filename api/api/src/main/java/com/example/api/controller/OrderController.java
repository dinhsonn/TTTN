package com.example.api.controller;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.api.entity.Order;
import com.example.api.service.OrderService;

@RestController
@AllArgsConstructor
@RequestMapping("api/orders")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")

public class OrderController {

    private OrderService orderService; 

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {  
        Order savedOrder = orderService.createOrder(order);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    
    @GetMapping("{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long orderId) { 
        Order order = orderService.getOrderById(orderId);  
        if (order != null) {
            return new ResponseEntity<>(order, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
    @GetMapping
    public ResponseEntity<Page<Order>> getAllOrders(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Order> orders = orderService.getAllOrders(pageable); 
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") Long orderId,
            @RequestBody Order order) { 
        order.setId(orderId);
        Order updatedOrder = orderService.updateOrder(order);  
        return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Long orderId) { 
        orderService.deleteOrder(orderId);  
        return new ResponseEntity<>("Order successfully deleted!", HttpStatus.OK);
    }
}

