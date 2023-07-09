import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from './pages/main/main';
import { LoginPage } from './pages/login/login';
import { ProfilePage } from './pages/profile/profile';
import { HomePage } from './pages/home/home';


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate replace to="/main" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
