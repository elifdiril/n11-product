import styles from"./styles.module.css";

function SelectableAttributeBox({value}) {
    return (
        <button className={styles.box}>
            {value}
        </button>
    );
}

export default SelectableAttributeBox;