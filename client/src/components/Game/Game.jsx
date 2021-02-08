import styles from "./Game.module.css";

function Game() {
  return (
    <div className="game">
      <h1 className={styles.gameName}>Взрывные котята</h1>
      <div className={styles.gameInfo}>
        <div className={styles.gameLeft}>
          <div className={styles.gamePhoto}>
            <img
              width="500px"
              src="https://www.mosigra.ru/image/cache/data/mosigra.product.main/559/016/DSC_6565-1024x1024-wm.jpg"
              alt="kittens"
            />
          </div>
          <div className={styles.gameDetailes}>
            <div className={styles.span}>4-5 игроков</div>
            <div className={styles.span}>партия от 15 минут</div>
          </div>
          <div className="">
            Правила можно почитать тут: ----------
          </div>
        </div>
        <div className={styles.gameRight}>
          <div className={styles.gameDescription}>
            «Взрывные котята» — это карточная игра, дико популярная на
            «Кикстартере». Она там собрала почти девять миллионов долларов — для
            настольных игр это рекорд. Все в неё просто влюбились. Кому-то эта
            игра напоминает «Уно», кому-то русскую рулетку. Вы тянете карты из
            колоды, в которой среди прочих карт замешаны взрывные котята — они
            сразу выкидывают вас из игры. Все остальные карты помогают избежать
            встречи с опасными котятами и подставить под удар друзей. Вам нужно
            остаться в игре последним выжившим.
          </div>
          <div className={styles.gameTags}>
            <div className={styles.span}>Подходит для детей</div>
            <div className={styles.span}>Карточная</div>
            <div className={styles.span}>33333</div>
            <div className={styles.span}>44444</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
