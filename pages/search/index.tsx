import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { SearchBox } from "../../components/SearchBox";

import styles from "../../styles/SearchPage.module.css";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { s: search } = query;
  return { props: { search } };
};

interface Item {
  id: number;
  title: string;
  image: string;
  price: string;
  source: string;
}

const SearchPage = ({ search }) => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(search?.toString());
  }, []);

  const items: Item[] = [
    {
      id: 1,
      title: "Judul Produk",
      image: "/images/smartphone.jpg",
      price: "2000000",
      source: "/images/tokped.jpg",
    },
    {
      id: 2,
      title: "Judul Produk 2",
      image: "/images/produk2.jpg",
      price: "2000000",
      source: "/images/tokped.jpg",
    },
    {
      id: 3,
      title: "1/7th Scale Rem (Re:ZERO -Starting Life in Another World",
      image: "/images/produk3.jpg",
      price: "2000000",
      source: "/images/tokped.jpg",
    },
    {
      id: 4,
      title: "Re: hidup Di Dunia Yang Berbeda",
      image: "/images/produk4.jpg",
      price: "2000000",
      source: "/images/tokped.jpg",
    },
  ];

  return (
    <>
      <Header title={`${search || ""} - Hasil Pencarian Tokotok`} />

      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.brand}>
            <Link href="/">Tokotok</Link>
          </h3>

          <SearchBox
            type="text"
            placeholder="Temukan barang dengan mudah"
            value={value || ""}
            onChange={(value) => setValue(value)}
          />
        </div>

        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.itemCard} key={item.id}>
              <Link href="">
                <img
                  src={item.image}
                  className={styles.itemImage}
                  alt={item.title}
                />
              </Link>
              <div className={styles.itemContent}>
                <div className={styles.itemLeft}>
                  <Link href="">
                    <a className={styles.itemTitle}>{item.title}</a>
                  </Link>
                  <p className={styles.itemPrice}>{item.price}</p>
                </div>
                <div className={styles.itemRight}>
                  <div className={styles.itemIcon}>
                    <img
                      className={styles.logo}
                      src={item.source}
                      width="32"
                      height="32"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
