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

const SearchPage = ({ search }) => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(search?.toString());
  }, []);

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
      </div>
    </>
  );
};

export default SearchPage;
