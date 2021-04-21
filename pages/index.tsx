import React, { useState } from "react";

import styles from "../styles/HomePage.module.css";

import { SearchBox } from "../components/SearchBox";
import { Category } from "../components/Category";
import { Header } from "../components/Header";

const HomePage = () => {
  const [value, setValue] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);

  const handleChangeCategory = (id: number) => setCategoryId(id);

  return (
    <>
      <Header />

      <div className={styles.container}>
        <form action="/search">
          <main className={styles.main}>
            <h1 className={styles.title}>Tokotok</h1>
            <SearchBox
              required
              type="text"
              name="q"
              value={value || ""}
              placeholder="Cari barang dengan mudah"
              onChange={(value) => setValue(value)}
            />
            <input type="hidden" name="c" value={categoryId} />
            <Category onChange={(id) => handleChangeCategory(id)} />
          </main>
        </form>

        <footer className={styles.footer}>
          <a href="/">Copyright &copy; 2021 mabengga09</a>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
