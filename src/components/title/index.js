import styles from"./styles.module.css";
function Title({title}) {
    return (
        <div className={styles.title}>
            {title}
        </div>
    );
}

export default Title;  