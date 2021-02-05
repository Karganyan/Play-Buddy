import styles from './Events.module.css';

const Events = () => {
  return (
    <div>
      <div>
        <div className={`${styles.split} ${styles.left}`}>
          <div className={styles.centered}>
            <h1>Мои События</h1>
          </div>
        </div>
        <div className={`${styles.split} ${styles.right}`}>
          <div className={styles.centered}>
            <h1>События</h1>
          </div>
        </div>
      </div>
      <button type='button' className={styles.button}>Создать событие</button>
    </div>
  );
};

export default Events;