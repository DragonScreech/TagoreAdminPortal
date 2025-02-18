import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FlyerUpload from './FlyerUpload';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/flyer-upload" element={<FlyerUpload />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
