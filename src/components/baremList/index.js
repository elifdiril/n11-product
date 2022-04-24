import React, { useState } from "react";
import BaremListItem from "../baremListItem";
import { useProduct } from "../../context/ProductContext";
import styles from "./styles.module.css";

function BaremList() {
  const { baremList, quantity } = useProduct();
  return (
    <div className={styles.baremListDiv}>
      Toptan Fiyat (Adet):{" "}
      {baremList.map((item, id) => {
        let isChecked = false;
        if (
          item.minimumQuantity <= quantity &&
          quantity <= item.maximumQuantity
        ) {
          isChecked = true;
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
