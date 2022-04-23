import { useProduct } from "../../context/ProductContext";
function BasketButton() {
  const { products, total, quantity } = useProduct();

  const onClickHandle = () => {
    console.log(products, total);
  };

  return (
    <button
      disabled={products.length === 1 && quantity > 0 ? false : true}
      onClick={onClickHandle}
    >
      SEPETE EKLE
    </button>
  );
}

export default BasketButton;
