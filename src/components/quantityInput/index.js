import styles from "./styles.module.css";

function QuantityInput() {
  return (
    <div className={styles.input}>
      Adet: <input type="text" /> Adet
    </div>
  );
}

export default QuantityInput;
