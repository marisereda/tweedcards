import { Tweets } from '~/pages';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Tweets />
      <Toaster position="top-center" />
    </div>
  );
};
