import "./attrBox.css";
import { useProduct } from "../../context/ProductContext";

function SelectableAttributeBox({ value, item }) {
  const { selectedAttributes, setSelectedAttributes } = useProduct();

  const onChangeHandle = (e) => {
    if (selectedAttributes.length < 1) {
      setSelectedAttributes((prev) => [...prev, { name: item.name, value, selectable:true }]);
    } else {
      selectedAttributes.forEach((element, index) => {
        if (element.name !== item.name) {
          setSelectedAttributes((prev) => [
            ...prev,
            { name: item.name, value, selectable:true },
          ]);
        } else {
          let attrArray = [...selectedAttributes];
          attrArray[index] = { name: item.name, value, selectable:true };
          setSelectedAttributes(attrArray);
        }
      });
    }
  };

  return (
    <div>
      <label className="label">
      <input
        type="radio"
        name={item.name}
        value={value}
        className={"radioInput selected"}
        onChange={onChangeHandle}
      />
      {value}</label>
    </div>
  );
}

export default SelectableAttributeBox;
