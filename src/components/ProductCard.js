import { formatMoney } from "../lib/utilities";
function ProductCard({ productCode, description, unitPrice }) {
  return (
    <div className="card">
      <img
        width="300"
        src={`/images/products/${productCode.toLowerCase()}.jpg`}
      />
      <p>{description}</p>
      <p>{formatMoney(unitPrice)}</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

export default ProductCard;
