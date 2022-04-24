import { createContext, useState, useContext, useEffect } from "react";
import productData from "../assets/product-data.json";
import objectsDifference from "../helpers/objectsDifference";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [photos, setPhotos] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState(
    productData.productVariants[0].images[0]
  );
  const productTitle = productData.productTitle;
  const baremList = productData.baremList;
  const [products, setProducts] = useState(productData.productVariants);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const selectableAttributes = productData.selectableAttributes;
  const [lastChoices, setLastChoices] = useState([]);

  useEffect(() => {
    const _products = [];
    const allImageArray = productData.productVariants.flatMap(
      (item) => item.images
    );
    //get all unique photos when no filter value
    if (selectedAttributes.length === 0) {
      setPhotos([...new Set(allImageArray)]);
    } else {
      productData.productVariants.forEach((variants) => {
        if (
          objectsDifference(selectedAttributes, variants.attributes).length ===
          0
        ) {
          _products.push(variants);
        }
      });
      setProducts(_products);
      setPhotos([...new Set(_products.flatMap((item) => item.images))]);
      setSelectedPhoto(
        [...new Set(_products.flatMap((item) => item.images))][0]
      );
    }
  }, [selectedAttributes]);

  const values = {
    selectableAttributes,
    selectedAttributes,
    setSelectedAttributes,
    photos,
    setPhotos,
    products,
    setProducts,
    productTitle,
    baremList,
    selectedPhoto,
    setSelectedPhoto,
    quantity,
    setQuantity,
    total,
    setTotal,
    lastChoices,
    setLastChoices,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
