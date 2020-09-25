import React from 'react';
import { PreLoader, Spinner } from './style'; 

const Loading = () => {
  return (
    <PreLoader>
      <Spinner />
    </PreLoader>
  );
};

export default Loading;
