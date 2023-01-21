import React, { useState, useEffect, useContext } from "react";

import { getProducts } from "./../../servers/servers";
import { CardProducts } from "../../cardproducts/cardProducts";
import { UserContext } from "../../context/context";
import { ThemeContext } from "@emotion/react";

export const Products = () => {
  const { setProduct } = useContext(ThemeContext);
  const { setProductUp } = useContext(UserContext);
  const [arrProducts, setArrProducts] = useState([]);

  let getProducts1 = async () => {
    let ProductsArr = await getProducts();
    let arrPro = Object.values(ProductsArr);
    setArrProducts(arrPro);
  };

  useEffect(() => {
    getProducts1();
  }, []);

  const productDataUrl = (objectProduct) => {
    console.log("objectProduct", objectProduct);
    setProduct(objectProduct);
  };

  return (
    <>
      {arrProducts.length > 0
        ? arrProducts.map((p) => {
            return (
              <>
                <CardProducts
                  btnLink={productDataUrl}
                  productObject={p}
                  changeSetfunction={setProductUp}
                />
              </>
            );
          })
        : "loading"}
    </>
  );
};
