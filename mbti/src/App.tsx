import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from './pages/main/main';
import { LoginPage } from './pages/login/login';


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to="/main" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
