import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  FiBox,
  FiHardDrive,
  FiMenu,
  FiShoppingBag,
  FiSmartphone,
} from "react-icons/fi";
import { SearchBox } from "../components/SearchBox";

type CategoryType = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

export default function Home() {
  const categories: CategoryType[] = [
    {
      id: 0,
      name: "Semua Kategori",
      icon: <FiMenu />,
    },
    {
      id: 1,
      name: "Handphone & Tablet",
      icon: <FiSmartphone />,
    },
    {
      id: 2,
      name: "Fashion",
      icon: <FiShoppingBag />,
    },
    {
      id: 3,
      name: "Elektronik",
      icon: <FiHardDrive />,
    },
    {
      id: 4,
      name: "Komputer",
      icon: <FiBox />,
    },
  ];

  const [selected, setSelected] = useState<number>(0);

  const handleClickCategory = (itemId: number) => setSelected(itemId);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tokotok</h1>

        <SearchBox />

        <div className={styles.grid}>
          {categories.map((item) => (
            <div
              className={[
                styles.card,
                selected == item.id && styles.cardActive,
              ].join(" ")}
              key={item.id}
              onClick={() => handleClickCategory(item.id)}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h4 className={styles.cardTitle}>{item.name}</h4>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/">Copyright &copy; 2021 Awsem</a>
      </footer>
    </div>
  );
}
