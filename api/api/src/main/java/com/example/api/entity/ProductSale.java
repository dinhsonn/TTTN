package com.example.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "db_productsale")
public class ProductSale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product productId;

    @Column(name = "sale_price", nullable = false)
    private Double salePrice;

    @Column(name = "quantity_sold", nullable = false)
    private Integer quantitySold;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_start", nullable = false)
    private Date dateStart;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_end", nullable = false)
    private Date dateEnd;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false)
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private Date updatedAt;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(name = "updated_by")
    private Integer updatedBy;

    @Column(nullable = false)
    private Integer status;
}
