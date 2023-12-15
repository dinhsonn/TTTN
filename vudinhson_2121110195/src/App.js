// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterPublic from './router/RouterPublic';
import RouterAdmin from './router/RouterAdmin';
function App() {
    return (
        <Router>
            <Routes>
            <Route path="/*" element={<RouterPublic />} />
            <Route path="/admin/*" element={<RouterAdmin />} />
            </Routes>
        </Router>
    );
}

export default App;
