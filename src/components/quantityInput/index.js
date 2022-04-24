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
    <div className={styles.inputDiv}>
      <span>Adet:</span>
      <span className={styles.inputSpan}>
        <input
className={styles.input}
          type="number"
          onChange={onChangeHandle}
          min={120}
        />
      </span>
    </div>
  );
}

export default QuantityInput;
