package com.example.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "db_category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String slug;

    @Column(nullable = false)
    private String image;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "sort_order")
    private Long sortOrder;

    @Column
    private String metakey;

    @Column
    private String metadesc;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false)
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private Date updatedAt;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(name = "updated_by", length = 255)
    private Integer updatedBy;

    @Column(nullable = false)
    private int status;

    public Category() {
        this.createdAt = new Date();
    }
}
