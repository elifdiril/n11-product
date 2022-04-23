import styles from "./styles.module.css";
import { useProduct } from "../../context/ProductContext";

function Photos() {
  const { photos, selectedPhoto, setSelectedPhoto } = useProduct();

  return (
    <div className={styles.pContainer}>
      <img src={selectedPhoto} className={styles.pBig} />
      <div className={styles.smallPContainer}>
      {photos && photos.map((photo, id) => (
       <li key={id} onClick={() => setSelectedPhoto(photo)}> <img key={id} src={photo} className={styles.pSmall} /></li>
      ))}</div>
    </div>
  );
}

export default Photos;
