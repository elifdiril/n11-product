import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import fixRounding from "../../helpers/fixRounding";
import styles from "./styles.module.css";

function BaremListItem({ minQuantity, maxQuantity, price, isChecked }) {
  const { quantity, setTotal } = useProduct();

  useEffect(() => {
    if (isChecked) {
      setTotal(fixRounding(quantity, price));
    }
  }, [quantity]);

  return (
    <div className={styles.baremItemDiv}>
      <label className="label">
        <input
          type="radio"
          name={minQuantity}
          value={minQuantity}
          disabled={true}
          checked={isChecked}
        />
        {minQuantity} - {maxQuantity > 2000 ? "2000+" : maxQuantity} {price} TL
      </label>
    </div>
  );
}

export default BaremListItem;
