import { useProduct } from "../../context/ProductContext";
import styles from "./styles.module.css";

function Total() {
  const { total } = useProduct();
  return (
    <div className={styles.totalDiv}>
      <span>Toplam: </span>
      <span className={styles.price}>{total}</span>
    </div>
  );
}

export default Total;
