import React, { useContext } from 'react';
import { AppWrapper } from './App.styles.js';
import GlobalStyles from './global.styles';

import AddCard from './components/AddCard/index.js';
import CardAdditionComplete from './components/CardAdditionComplete';
import CardList from './components/CardList/index.js';

import { PAGE } from './constants/constant';

import { CardListProvider } from './data/context/CardListContext.js';
import { CardProvider } from './data/context/CardContext.js';
import { PageContext } from './data/context/PageContext.js';
import { ModalProvider } from './data/context/ModalContext.js';

function App() {
  const { page } = useContext(PageContext);

  return (
    <>
      <GlobalStyles />
      <ModalProvider>
        <CardListProvider>
          <CardProvider>
            <AppWrapper>
              {page === PAGE.ADD_CARD && <AddCard />}
              {page === PAGE.CARD_COMPLETE && <CardAdditionComplete />}
              {page === PAGE.CARD_LIST && <CardList />}
            </AppWrapper>
          </CardProvider>
        </CardListProvider>
      </ModalProvider>
    </>
  );
}

export default App;