import { Component } from 'solid-js';

import styles from './App.module.css';
import Images from './gallery/images';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img class={styles.logo} src="logo.svg" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Images />
    </div>
  );
};

export default App;
