import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Admin/Sidebar";
function ViewProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        const result = await axios.get(`http://localhost:8384/api/products/${id}`);
        setProduct(result.data);
      } catch (error) {
        console.error("Error loading product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container">
        <div className="py-4">
          <Link to="/admin/product" className="btn btn-primary">
            Quay lại
          </Link>
          <h1 className="display-4">Product Details</h1>
          <hr />

          <ul className="list-group">
            <li className="list-group-item">
              <strong>ID:</strong> {product.id}
            </li>
            <li className="list-group-item">
              <strong>Tên sản phẩm:</strong> {product.name}
            </li>
            <li className="list-group-item">
              <strong>Giá:</strong> {product.price}
            </li>
            <li className="list-group-item">
              <strong>Chi tiết:</strong> {product.description}
            </li>
            <li className="list-group-item">
              <strong>Loại sản phẩm	:</strong> {product.category_id}
            </li>
            <li className="list-group-item">
              <strong>Tên thương hiệu	:</strong> {product.brand_id}
            </li>
            <li className="list-group-item">
              <strong>Status:</strong> {product.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
