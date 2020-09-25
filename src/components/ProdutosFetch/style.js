import styled from 'styled-components';

export const MainPage = styled.section`
  max-width: 60rem;
  margin: 0 auto;
`;

export const ProdutoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProdutoStyled = styled.div`
  cursor: pointer;
  margin: 1.25rem;
  transition: all .3s ease;

  img {
    border-radius: 0.625rem;
  }
  
  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }
`;

export const ProdutoName = styled.div`
  text-align: left;
`;

export const ProdutoDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    border-radius: 0.625rem;
    margin: 1.25rem 0rem;
  }
`;

export const ProdutoInfo = styled.div`
  margin: 1.875rem;
`;

export const ProdutoPrice = styled.div`
  margin: 0.625rem 1.875rem;
  h4 {
    background: #91fb5d;
    color: #017e01;
    display: inline;
    border-radius: 0.3125rem;
    padding: 0.3rem;
    font-weight: 400;
  } 
`;

export const ProdutoDescription = styled.div`
  margin: 0.625rem 1.875rem;
  display: flex;
  max-width: 18.75rem;
`;

export const ProdutoAbout = styled.div`
  margin: 0.625rem;
`;