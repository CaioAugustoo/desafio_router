import React, { useState, useEffect } from 'react';
import Produto from './Produto';
import { MainPage } from './style';
import Loading from '../Loading/Loading';
import Nav from '../Nav/Nav';

const ProdutosFetch = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduto = async () => {
      setLoading(true)
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
      const json = await response.json();
      setProduto(json);
      setLoading(false)
    }
    fetchProduto()
  },[]);
  document.title = 'Ranek';

  if(produto === null) return null;
  return (
    <MainPage>
      <Nav />
      {loading && <Loading />}
      {!loading && produto  && <Produto produtoData={produto}/>}
    </MainPage>
  );
};

export default ProdutosFetch;
