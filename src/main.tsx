import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { HomePage } from './pages/HomePage';
import { Tweets } from './pages/Tweets';
import { store } from './redux/store';
import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tweetcards',
    element: <Tweets />,
    errorElement: <HomePage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <GlobalStyle />
        <Toaster position="top-center" gutter={24} />
      </Provider>
    </ThemeProvider>{' '}
  </React.StrictMode>
);
