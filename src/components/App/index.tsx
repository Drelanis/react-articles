import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from '../../theme/useTheme';
import { AboutLazyPage } from '../../pages/About/index.lazy';
import { MainLazyPage } from '../../pages/Main/index.lazy';
import { buildClassNames } from '../../helpers';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={buildClassNames({ classNames: 'app', additional: [theme] })}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
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
