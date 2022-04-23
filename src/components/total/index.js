import { useProduct } from "../../context/ProductContext";
function Total() {
  const { total } = useProduct();
  return <div>{total}</div>;
}

export default Total;
