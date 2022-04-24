import SelectableAttributeBox from "../selectableAttributeBox";
import styles from "./styles.module.css";
import { useProduct } from "../../context/ProductContext";

function SelectableAttributes() {
  const { selectableAttributes } = useProduct();

  return (
    <div className={styles.selectableAttribute}>
      {selectableAttributes.map((item, i) => (
        <div key={i} className={styles.row}>
          <span className={styles.name}>{item.name}: </span>{" "}
          {item?.values?.map((val, id) => (
            <SelectableAttributeBox
              attributeId={i}
              key={id}
              value={val}
              item={item}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SelectableAttributes;
