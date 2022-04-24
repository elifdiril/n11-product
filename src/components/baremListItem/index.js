import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import fixRounding from "../../helpers/fixRounding";
import "./baremItem.css";

function BaremListItem({ minQuantity, maxQuantity, price, isChecked }) {
  const { quantity, setTotal } = useProduct();

  useEffect(() => {
    if (isChecked) {
      setTotal(fixRounding(quantity, price));
    }
  }, [quantity]);

  return (
    <div className="baremItemDiv">
      <input
        type="radio"
        id={minQuantity}
        name={minQuantity}
        value={minQuantity}
        disabled={true}
        checked={isChecked}
      />
      <label className="label" htmlFor={minQuantity}>
        {minQuantity} - {maxQuantity > 2000 ? "2000+" : maxQuantity} {price} TL
      </label>
    </div>
  );
}

export default BaremListItem;
