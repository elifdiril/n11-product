import styles from "./styles.module.css";
import { useProduct } from "../../context/ProductContext";

function Title() {
  const { productTitle } = useProduct();
  
  return <div className={styles.title}>{productTitle}</div>;
}

export default Title;
