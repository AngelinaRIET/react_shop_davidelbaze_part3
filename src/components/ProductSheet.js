import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDatabase } from "../lib/database";
import ProductCard from "./ProductCard";
function ProductSheet() {
  let params = useParams(); // {productCode: <valeur>}
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(
      productDatabase.find(
        (e) => e.productCode.toLowerCase() === params.productCode.toLowerCase()
      ) ?? {}
    );
  }, []);

  return (
    <>
      {Object.keys(product).length > 0 ? (
        <div>
          <ProductCard
            description={product.description}
            productCode={product.productCode}
            unitPrice={product.unitPrice}
          />
        </div>
      ) : (
        <div>Le produit n'existe pas </div>
      )}
    </>
  );
}

export default ProductSheet;
