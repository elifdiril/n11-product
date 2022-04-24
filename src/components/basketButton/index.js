import { useProduct } from "../../context/ProductContext";
import styles from "./styles.module.css";

function BasketButton() {
  const { products, total, quantity } = useProduct();

  const onClickHandle = () => {
    console.log("product:", products, "total:", total);
  };

  return (
    <button
      disabled={products.length === 1 && quantity > 0 ? false : true}
      onClick={onClickHandle}
      className={styles.buttonBasket}
    >
      SEPETE EKLE
    </button>
  );
}

export default BasketButton;
