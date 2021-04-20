import React, { useState } from "react";

import styles from "../styles/HomePage.module.css";

import { SearchBox } from "../components/SearchBox";
import { Category } from "../components/Category";
import { Header } from "../components/Header";

const HomePage = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <Header />

      <div className={styles.container}>
        <form action="/search">
          <main className={styles.main}>
            <h1 className={styles.title}>Tokotok</h1>
            <SearchBox
              type="text"
              name="s"
              value={value || ""}
              placeholder="Cari barang dengan mudah"
              onChange={(value) => setValue(value)}
            />
            <Category />
          </main>
        </form>

        <footer className={styles.footer}>
          <a href="/">Copyright &copy; 2021 Awsem</a>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
