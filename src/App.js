import SelectableAttributes from "./components/selectableAttribute";
import Stars from "./components/stars";
import Title from "./components/title";
import productData from "./assets/product-data.json";
import { useEffect, useState } from "react";
import BaremList from "./components/baremList";
import BasketButton from "./components/basketButton";
import QuantityInput from "./components/quantityInput";
import "./App.css";

function App() {
  const [selectedFirstAttribute, setSelectedFirstAttribute] = useState(
    productData.selectableAttributes[0]
  );
  const [selectedSecondAttribute, setSelectedSecondAttribute] = useState();
  const [photos, setPhotos] = useState();

  useEffect(()=>{
    setPhotos(productData.productVariants.map(function(item) {return item["images"]}))
  },[selectedFirstAttribute, selectedSecondAttribute])

  return (
    <div className="product">
      <div className="photos" >
        gfhfgh
      </div>
      <div className="product-details">
      <Title title={productData?.productTitle} />
      <Stars />
      {productData?.selectableAttributes.map((item, id) => (
        <SelectableAttributes key={id} item={item} />
      ))}
      <BaremList list={productData?.baremList} />
      <QuantityInput/>
      <BasketButton/>
      </div>
    </div>
  );
}

export default App;
