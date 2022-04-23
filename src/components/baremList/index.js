import React from "react";
import BaremListItem from "../baremListItem";
import { useProduct } from "../../context/ProductContext";

function BaremList() {
  const { baremList } = useProduct();
  return (
    <div>
      Toptan Fiyat (Adet):{" "}
      {baremList.map((item, id) => (
        <BaremListItem
          key={id}
          minQuantity={item.minimumQuantity}
          maxQuantity={item.maximumQuantity}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default BaremList;
