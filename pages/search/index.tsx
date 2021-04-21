import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { SearchBox } from "../../components/SearchBox";
import { ItemResult, SearchResult } from "../../components/SearchResult";

import styles from "../../styles/SearchPage.module.css";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { s: search } = query;
  return { props: { search } };
};

const SearchPage = ({ search }) => {
  const [value, setValue] = useState<string>();
  const [isFixed, setIsFixed] = useState(false);

  const handleOnScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    setValue(search?.toString());
    document.addEventListener("scroll", handleOnScroll);
    return () => {
      document.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const items: ItemResult[] = [
    {
      id: 1,
      title: "HP Terbaik Vivo Y50 Diskon 50%",
      image: "/images/smartphone.jpg",
      price: 2000000,
      store: {
        type: "tokopedia",
        name: "Toko Pak Edi",
      },
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
      rating: { star: 4, total: 8 },
    },
    {
      id: 2,
      title: "Judul Produk 2",
      image: "/images/produk2.jpg",
      price: 1500000,
      store: {
        type: "bukalapak",
        name: "Bukatoko",
      },
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
      rating: { star: 5, total: 19 },
    },
    {
      id: 3,
      title: "1/7th Scale Rem (Re:ZERO -Starting Life in Another World",
      image: "/images/produk3.jpg",
      price: 8000000,
      store: {
        type: "shopee",
        name: "Mbak Sofi",
      },
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
      rating: { star: 4, total: 10 },
    },
    {
      id: 4,
      title: "Re: hidup Di Dunia Yang Berbeda",
      image: "/images/produk4.jpg",
      price: 500000,
      store: {
        type: "tokopedia",
        name: "Toko Pak Edi",
      },
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
      rating: { star: 0, total: 0 },
    },
    {
      id: 4,
      title: "Re: hidup Di Dunia Yang Berbeda",
      image: "/images/produk4.jpg",
      price: 500000,
      store: {
        type: "tokopedia",
        name: "Toko Pak Edi",
      },
      url:
        "https://www.tokopedia.com/jayapc/ssd-v-gen-128gb-sata-3-vgen-128-gb",
      rating: { star: 0, total: 0 },
    },
  ];

  return (
    <>
      <Header title={`${search || ""} - Hasil Pencarian Tokotok`} />

      <div className={styles.container}>
        <div className={[styles.header, isFixed && styles.fixed].join(" ")}>
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

        <div className={styles.stats}>
          Menemukan 10.000 hasil untuk pencarian <strong>"{search}"</strong>
        </div>

        <div className={styles.action}></div>

        <SearchResult results={items} />
      </div>
    </>
  );
};

export default SearchPage;
