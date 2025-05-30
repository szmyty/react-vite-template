import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../app/App';
import NotFound from './NotFound';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
