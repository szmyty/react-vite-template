import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../app/App';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
