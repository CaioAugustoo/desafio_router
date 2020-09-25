import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Nav from "../Nav/Nav";
import {
  ProdutoWrapper,
  ProdutoDetail,
  ProdutoInfo,
  ProdutoPrice,
  ProdutoDescription,
  ProdutoAbout,
} from "./style";

const ProdutoDetails = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduto = async () => {
      setLoading(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`
      );
      const json = await response.json();
      setProduto(json);
      setLoading(false);
    };
    fetchProduto();
  }, [id]);

  if (produto === null) return null;
  if (loading) return <Loading />;
  document.title = `Ranek | ${produto.nome}` 
  return (
    <Fragment>
      <Nav />
      <ProdutoWrapper className="left-slide">
        <ProdutoDetail>
          {produto.fotos.map((foto, index) => (
            <img src={foto.src} width="400" key={index} alt={foto.id} />
          ))}
        </ProdutoDetail>

        <ProdutoAbout>
          <ProdutoInfo>
            <h3>{produto.nome}</h3>
          </ProdutoInfo>

          <ProdutoPrice>
            <h4>R${produto.preco}</h4>
          </ProdutoPrice>

          <ProdutoDescription>
            <p>{produto.descricao}</p>
          </ProdutoDescription>
        </ProdutoAbout>
      </ProdutoWrapper>
    </Fragment>
  );
};

export default ProdutoDetails;
