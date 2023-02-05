import { Component } from 'solid-js';

import styles from './App.module.css';
import Images from './gallery/images';
import Logo from './logo.svg';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img class={styles.logo} src={Logo} />
        <p>Atelier</p>
      </header>
      <Images />
    </div>
  );
};

export default App;
