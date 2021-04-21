import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { SearchBox } from "../../components/SearchBox";

import styles from "../../styles/SearchPage.module.css";
import { SearchResult } from "../../components/SearchResult";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { s: search } = query;
  return { props: { search } };
};

export interface ItemResult {
  id: number;
  title: string;
  image: string;
  price: string;
  source: string;
  url: string;
}

const SearchPage = ({ search }) => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(search?.toString());
  }, []);

  const items: ItemResult[] = [
    {
      id: 1,
      title: "HP Terbaik Vivo Y50 Diskon 50%",
      image: "/images/smartphone.jpg",
      price: "Rp. 2.000.000,-",
      source: "/images/tokped.jpg",
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
    },
    {
      id: 2,
      title: "Judul Produk 2",
      image: "/images/produk2.jpg",
      price: "Rp. 1.500.000,-",
      source: "/images/tokped.jpg",
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
    },
    {
      id: 3,
      title: "1/7th Scale Rem (Re:ZERO -Starting Life in Another World",
      image: "/images/produk3.jpg",
      price: "Rp. 8.000.000,-",
      source: "/images/tokped.jpg",
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
    },
    {
      id: 4,
      title: "Re: hidup Di Dunia Yang Berbeda",
      image: "/images/produk4.jpg",
      price: "Rp. 500.000,-",
      source: "/images/tokped.jpg",
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
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

        <SearchResult results={items} />
      </div>
    </>
  );
};

export default SearchPage;
