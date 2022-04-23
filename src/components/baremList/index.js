import React, { useState } from "react";
import BaremListItem from "../baremListItem";
import { useProduct } from "../../context/ProductContext";

function BaremList() {
  const { baremList, quantity } = useProduct();
  return (
    <div>
      Toptan Fiyat (Adet):{" "}
      {baremList.map((item, id) => {
        let isChecked = false;
        if (
          item.minimumQuantity <= quantity &&
          quantity <= item.maximumQuantity
        ) {
          isChecked = true;
        }

        if(item.maximumQuantity > 2000){
          item.maximumQuantity = "2000 +"
        }
        return (
          <BaremListItem
            key={id}
            minQuantity={item.minimumQuantity}
            maxQuantity={item.maximumQuantity}
            price={item.price}
            isChecked={isChecked}
          />
        );
      })}
    </div>
  );
}

export default BaremList;
