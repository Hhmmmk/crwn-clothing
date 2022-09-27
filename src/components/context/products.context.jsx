import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils.js';

// import SHOP_DATA from '../../shop-data.js'; //Only used once to put our products in firestore

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Only used once to put our products in firestore
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
