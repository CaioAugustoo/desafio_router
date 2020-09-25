import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProdutosFetch from './components/ProdutosFetch/ProdutosFetch';
import ProdutoDetails from './components/ProdutosFetch/ProdutoDetails';
import GlobalStyle from './style/global';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProdutosFetch />} />
          <Route path="/produto/:id" element={<ProdutoDetails />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
