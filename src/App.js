import SelectableAttributes from "./components/selectableAttribute";
import Stars from "./components/stars";
import Title from "./components/title";
import BaremList from "./components/baremList";
import BasketButton from "./components/basketButton";
import QuantityInput from "./components/quantityInput";
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Photos from "./components/photos";
import Total from "./components/total";

function App() {
  return (
    <ProductProvider>
      <div className="product">
        <div className="photos">
          <Photos />
        </div>
        <div className="product-details">
          <Title />
          <Stars />
          <SelectableAttributes />
          <BaremList />
          <QuantityInput />
          <BasketButton />
          <Total />
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
