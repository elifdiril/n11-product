import styles from "./styles.module.css";
import { useProduct } from "../../context/ProductContext";

function QuantityInput() {
  const { setQuantity } = useProduct();

  const onChangeHandle = (e) => {
    if (e.target.value.length > 2) {
      setQuantity(e.target.value);
    }
  };

  return (
    <div className={styles.input}>
      Adet:{" "}
      <input
        type="number"
        onChange={onChangeHandle}
        min={120}
      />{" "}
      Adet
    </div>
  );
}

export default QuantityInput;
