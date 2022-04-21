import SelectableAttributeBox from "../selectableAttributeBox";
import styles from "./styles.module.css";

function SelectableAttributes({ item }) {
  return (
    <div>
      {item.name}: {item?.values?.map((val, id) => <SelectableAttributeBox key={id} value={val}/>)}
    </div>
  );
}

export default SelectableAttributes;
