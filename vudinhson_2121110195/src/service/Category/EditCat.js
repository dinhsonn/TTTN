import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";

const EditCat = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: "",
    slug: "",
    metakey: "",
    metadesc: "",
    status: 1,
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8384/api/categories/${id}`);
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
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
        imageFormData.append("customName", category.name);
  
        const imageResponse = await axios.post("http://localhost:8384/api/categories/image", imageFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        if (imageResponse.status === 200) {
          const newImageName = category.name;
          setCategory({ ...category, image: newImageName });
        }
      }
  
      // Bước 2: Gửi yêu cầu PUT để cập nhật thông tin danh mục
      await axios.put(`http://localhost:8384/api/categories/${id}`, category);
  
      navigate("/admin/category");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  

  return (
    <div className="d-flex">
    <Sidebar />
    <div className="container mt-5">
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
        {/* Các trường thông tin của danh mục */}
        <div className="mb-3">
          <label className="form-label">Category Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={category.name}
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
            value={category.slug}
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
            value={category.metakey}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Meta Description:</label>
          <textarea
            className="form-control"
            name="metadesc"
            value={category.metadesc}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status:</label>
          <select
            className="form-select"
            name="status"
            value={category.status}
            onChange={handleChange}
          >
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </select>
        </div>

        {/* Nút Submit */}
        <button type="submit" className="btn btn-primary">
          Update Category
        </button>
        <Link className="btn btn-outline-danger mx-2" to="/admin/category">
              Hủy
        </Link>
      </form>
    </div>
    </div>

  );
};

export default EditCat;