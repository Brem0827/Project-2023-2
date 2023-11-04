import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Agreement from './pages/agreement.jsx'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Community from './pages/Community.jsx';
import Support from './pages/Support.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="agreement" element={<Agreement />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Login" element={<Login />} />
        <Route path="Community" element={<Community />} />
        <Route path="Support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
