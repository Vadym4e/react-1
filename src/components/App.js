import { RecepeList } from './RecepeList/RecepeList';
import recepes from './recepes.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <RecepeList items={recepes} />
      <GlobalStyle />
    </>
  );
};
