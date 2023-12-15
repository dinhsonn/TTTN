import Contact from "../pages/frontend/Contact/Contact";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutPublic from "../layout/LayoutPublic";
import Signin from "../pages/frontend/Signin/Signin";
import Shop from "../pages/frontend/Shop/Shop";
import Product from "../pages/frontend/Product/Product";

function RouterPublic()
{

 return (
    <Routes>
      <Route path="/" element={<LayoutPublic />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/dang-nhap" element={<Signin />} />
      <Route path="/san-pham" element={<Shop />} />
      <Route path="/chi-tiet-san-pham" element={<Product />} />
    </Routes>
  );
}

export default RouterPublic;