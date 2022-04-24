import "./attrBox.css";
import { useProduct } from "../../context/ProductContext";
import { useEffect, useState } from "react";

function SelectableAttributeBox({ value, item }) {
  const { selectedAttributes, setSelectedAttributes, products } = useProduct();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    //do not set disabled if it is the first or last element of the selectedAttributes array
    setIsDisabled(
      !products.some((product) =>
        product.attributes.some(
          (attr) => attr.name === item.name && attr.value === value
        )
      ) &&
        selectedAttributes[0].name !== item.name &&
        selectedAttributes[selectedAttributes.length - 1].name !== item.name
    );
  }, [products]);

  const onChangeHandle = (e) => {
    if (selectedAttributes.length < 1) {
      setSelectedAttributes((prev) => [
        ...prev,
        { name: item.name, value, selectable: true },
      ]);
    } else {
      selectedAttributes.forEach((element, index) => {
        if (element.name !== item.name) {
          setSelectedAttributes((prev) => [
            ...prev,
            { name: item.name, value, selectable: true },
          ]);
        } else {
          let attrArray = [...selectedAttributes];
          attrArray[index] = { name: item.name, value, selectable: true };
          setSelectedAttributes(attrArray);
        }
      });
    }

    if (item?.name === selectedAttributes[0]?.name) {
      setSelectedAttributes([{ name: item.name, value, selectable: true }]);
    }
  };

  return (
    <div>
      <input
        type="radio"
        name={item.name}
        id={`${value}${item.name}`}
        value={value}
        onChange={onChangeHandle}
        disabled={isDisabled}
      />
      <label className="label" htmlFor={`${value}${item.name}`}>
        {value}
      </label>
    </div>
  );
}

export default SelectableAttributeBox;
