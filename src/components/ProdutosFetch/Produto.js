import React from "react";
import { ProdutoWrapper, ProdutoStyled, ProdutoName } from "./style";
import { Link } from "react-router-dom";

const Produto = ({ produtoData }) => {
  return (
    <ProdutoWrapper className="left-slide">
      {produtoData.map((produto) => (
        <Link key={produto.id} to={`/produto/${produto.id}`}>
          <ProdutoStyled>
            <img src={produto.fotos[0].src} width="250" alt={produto.name} />
            <ProdutoName>
              <h1>{produto.nome}</h1>
            </ProdutoName>
          </ProdutoStyled>
        </Link>
      ))}
    </ProdutoWrapper>
  );
};

export default Produto;
