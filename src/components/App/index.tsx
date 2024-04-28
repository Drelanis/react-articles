import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutLazyPage } from '../../pages/About/index.lazy';
import { MainLazyPage } from '../../pages/Main/index.lazy';

export const App = () => {
  return (
    <div className="app">
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutLazyPage />} />
          <Route path="/" element={<MainLazyPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
