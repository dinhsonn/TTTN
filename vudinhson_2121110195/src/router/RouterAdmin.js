import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutAdmin from '../layout/LayoutAdmin';
import Product from '../pages/backend/Product/Product';
import ViewProduct from '../service/Product/ViewProduct';
import EditProduct from '../service/Product/EditProduct';
import AddProduct from '../service/Product/AddProduct';
import Category from '../pages/backend/Category/Category';
import AddCat from '../service/Category/AddCat';
import EditCat from '../service/Category/EditCat';
import ViewCat from '../service/Category/ViewCat';
import Brand from '../pages/backend/Brand/Brand';
import AddBrand from '../service/Brand/AddBrand';
import EditBrand from '../service/Brand/EditBrand';
import ViewBrand from '../service/Brand/ViewBrand';

function RouterAdmin() {
  return (
    <Routes>
        <Route path="/" element={<LayoutAdmin />} />
{/* Product */}
        <Route path="/product" element={<Product />} />
        <Route path="/product/view-product/:id" element={<ViewProduct />} />
        <Route path="/product/edit-product/:id" element={<EditProduct />} />
        <Route path="/product/add-product" element={<AddProduct />} />
{/* Category */}
        <Route path="/category" element={<Category />} />
        <Route path="/category/edit-category/:id" element={<EditCat />} />
        <Route path="/category/view-category/:id" element={<ViewCat />} />
        <Route path="/category/add-category" element={<AddCat />} />
{/* Brand */}
        <Route path="/brand" element={<Brand />} />
        <Route path="/brand/edit-brand/:id" element={<EditBrand />} />
        <Route path="/brand/view-brand/:id" element={<ViewBrand />} />
        <Route path="/brand/add-brand" element={<AddBrand />} />
    </Routes>
  );
}

export default RouterAdmin;
