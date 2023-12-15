import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";

const EditBrand = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [brand, setBrand] = useState({
    name: "",
    slug: "",
    metakey: "",
    metadesc: "",
    status: 1,
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`http://localhost:8384/api/brand/${id}`);
        setBrand(response.data);
      } catch (error) {
        console.error("Error fetching brand:", error);
      }
    };

    fetchBrand();
  }, [id]);

  const handleChange = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Bước 1: Kiểm tra xem có thay đổi hình ảnh không
      if (image) {
        // Nếu có, thực hiện tải ảnh
        const imageFormData = new FormData();
        imageFormData.append("file", image);
        imageFormData.append("customName", brand.name);

        const imageResponse = await axios.post(
          "http://localhost:8384/api/brand/image",
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (imageResponse.status === 200) {
          // Cập nhật tên ảnh mới dựa trên brandname
          const newImageName = imageResponse.name + ".png";
          setBrand({ ...brand, image: newImageName });
        }
      }

      // Bước 2: Gửi yêu cầu PUT để cập nhật thông tin thương hiệu
      await axios.put(`http://localhost:8384/api/brand/${id}`, brand);

      navigate("/admin/brand");
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container mt-5">
        <h1>Edit Brand</h1>
        <form onSubmit={handleSubmit}>
          {/* Các trường thông tin của thương hiệu */}
          <div className="mb-3">
            <label className="form-label">Brand Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={brand.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Slug:</label>
            <input
              type="text"
              className="form-control"
              name="slug"
              value={brand.slug}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image:</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Meta Key:</label>
            <input
              type="text"
              className="form-control"
              name="metakey"
              value={brand.metakey}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Meta Description:</label>
            <textarea
              className="form-control"
              name="metadesc"
              value={brand.metadesc}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Status:</label>
            <select
              className="form-select"
              name="status"
              value={brand.status}
              onChange={handleChange}
            >
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
            </select>
          </div>

          {/* Nút Submit */}
          <button type="submit" className="btn btn-primary">
            Update Brand
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/admin/brand">
            Hủy
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditBrand;
