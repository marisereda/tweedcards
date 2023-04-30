import { Toaster } from 'react-hot-toast';
import { Tweets } from '~/pages';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Tweets />
      <Toaster position="top-center" gutter={24} />
    </div>
  );
};
