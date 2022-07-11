import React from 'react';

import {
  Navigate,
  Route,
  Routes,
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './views/HomePage';

const App = () => {
  function RequireAuth({ children }: { children: JSX.Element }) {
    const isLoggedIn =
      localStorage.getItem("hashtagToken") !== null &&
      Number(localStorage.getItem("hashtagTokenExpiry")) >=
        new Date().getTime();

    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    } else {
      return children;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;