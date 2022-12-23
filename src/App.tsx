import type { Component } from "solid-js";
import { onMouseLeave, onMouseMove } from "./scripts";
import styles from "./App.module.css";
import visaImg from "./assets/visa.png";
import qrImg from "./assets/qr.png";

const App: Component = () => {
  return (
    <div class={styles.wrapper}>
      <div
        id="card"
        class="card"
        onMouseMove={(event) => onMouseMove(event)}
        onMouseLeave={(event) => onMouseLeave(event)}
      > 
        <div class={styles.wrapper__header}>
          <div class={styles.wrapper__brend}>
            <img src={visaImg} />
          </div>
          <div class={styles.wrapper__qr}>
            <img src={qrImg} />
          </div>
        </div>
        <div class={styles.wrapper__brend__mask} />
        <div class={styles.wrapper__number}>{`3760   9414   3797   1164`}</div>
        <div class={styles.wrapper__data}>
          <div class={styles.wrapper__data__name}>
            <div class={styles.name__label}>CARD HOLDER</div>
            ALEKSEENKO NIKITA
          </div>
          <div class={styles.wrapper__data__date}>
            <div class={styles.date__label}>EXPIRES</div>
            09/15
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
