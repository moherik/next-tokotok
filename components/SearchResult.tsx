import Link from "next/link";
import React from "react";
import { convertNumberToRP } from "../utils/currencyUtil";

import styles from "../styles/SearchResult.module.css";

export interface ItemResult {
  id: number;
  title: string;
  image: string;
  price: number;
  source: string;
  url: string;
}

export const SearchResult: React.FC<{ results: ItemResult[] }> = ({
  results,
}) => {
  return (
    <div className={styles.items}>
      {results.map((item) => (
        <div className={styles.itemCard} key={item.id}>
          <Link href="">
            <img
              src={item.image}
              className={styles.itemImage}
              alt={item.title}
            />
          </Link>
          <div className={styles.itemContent}>
            <p className={styles.itemPrice}>{convertNumberToRP(item.price)}</p>
            <Link href="">
              <a className={styles.itemTitle} title={item.title}>
                {item.title}
              </a>
            </Link>
            <p className={styles.itemUrl} title={item.url}>
              {item.url}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
