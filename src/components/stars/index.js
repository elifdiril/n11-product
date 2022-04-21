import styles from"./styles.module.css";

function Stars(props) {
    return (
        <div>
      {[...Array(4)].map((star, id) => {        
        return (         
          <span key={id} className={styles.stars}>&#9733;</span>        
        );
      })} 
      23 Yorum
    </div> 
    );
}

export default Stars;