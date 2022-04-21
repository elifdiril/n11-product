import SelectableAttributes from "./components/selectableAttribute";
import Stars from "./components/stars";
import Title from "./components/title";
import productData from "./assets/product-data.json";
import { useState } from "react";
import BaremList from "./components/baremList";
import BasketButton from "./components/basketButton";
import QuantityInput from "./components/quantityInput";

function App() {
  const [selectedFirstAttribute, setSelectedFirstAttribute] = useState(
    productData.selectableAttributes[0]
  );
  const [selectedSecondAttribute, setSelectedSecondAttribute] = useState();

  return (
    <div className="product">
      <Title title={productData?.productTitle} />
      <Stars />
      {productData?.selectableAttributes.map((item, id) => (
        <SelectableAttributes key={id} item={item} />
      ))}
      <BaremList list={productData?.baremList} />
      <QuantityInput/>
      <BasketButton/>
    </div>
  );
}

export default App;
