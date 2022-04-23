import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";

function BaremListItem({ minQuantity, maxQuantity, price, isChecked }) {
  const { quantity, setTotal } = useProduct();

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity]);

  return (
    <div>
      <label className="label">
        <input
          type="radio"
          name={minQuantity}
          value={minQuantity}
          disabled={true}
          checked={isChecked}
        />
        {minQuantity} - {maxQuantity} {price} TL
      </label>
    </div>
  );
}

export default BaremListItem;
