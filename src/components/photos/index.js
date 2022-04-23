import styles from "./styles.module.css";
import { useProduct } from "../../context/ProductContext";

function Photos() {
  const { selectedPhoto, setSelectedPhoto } = useProduct();
  return <div className={styles.pContainer}>

<img src="../logo512.png"/>
  </div>;
}

export default Photos;
