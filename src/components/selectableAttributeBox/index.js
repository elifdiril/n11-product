import "./attrBox.css";
import { useProduct } from "../../context/ProductContext";
import { useEffect, useState } from "react";

function SelectableAttributeBox({ value, item }) {
  const { selectedAttributes, setSelectedAttributes, products } = useProduct();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(
      !products.some((product) =>
        product.attributes.some(
          (attr) => attr.name === item.name && attr.value === value
        )
      ) && selectedAttributes[0].name !== item.name
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
      <label className="label">
        <input
          type="radio"
          name={item.name}
          value={value}
          onChange={onChangeHandle}
          disabled={isDisabled}
        />
        {value}
      </label>
    </div>
  );
}

export default SelectableAttributeBox;
