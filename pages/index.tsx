import React, { useState } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import { SearchBox } from "../components/SearchBox";
import { Category } from "../components/Category";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tokotok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tokotok</h1>
        <SearchBox />
        <Category />
      </main>

      <footer className={styles.footer}>
        <a href="/">Copyright &copy; 2021 Awsem</a>
      </footer>
    </div>
  );
}
