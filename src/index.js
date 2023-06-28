import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import { AuthContextProvider } from './context/AuthContext';
import { PostsContextProvider } from './context/PostsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <PostsContextProvider>
    <App />
    </PostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
