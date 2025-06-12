import React, { createContext, useState } from 'react';
export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [quote, setQuote] = useState(null);
  const [postResponse, setPostResponse] = useState(null);
  const [putResponse, setPutResponse] = useState(null);

  return (
    <ApiContext.Provider value={{ quote, setQuote, postResponse, setPostResponse, putResponse, setPutResponse }}>
      {children}
    </ApiContext.Provider>
  );
};
