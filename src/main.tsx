import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Tweets } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <HomePage />,
  },
  {
    path: '/tweetcards',
    element: <Tweets />,
    errorElement: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyle />
      <Toaster position="top-center" gutter={24} />
    </Provider>
  </React.StrictMode>
);
