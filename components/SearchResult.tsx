import React, { useEffect, useRef, useState } from "react";
import { convertNumberToRP } from "../utils/currencyUtil";
import { MdStar } from "react-icons/md";

import styles from "../styles/SearchResult.module.css";
import { SourceIcon } from "./SourceIcon";

export interface ItemResult {
  id: number;
  title: string;
  image: string;
  price: number;
  store: {
    type: "bukalapak" | "tokopedia" | "shopee";
    name: string;
  };
  url: string;
  rating: {
    star: number;
    total: number;
  };
}

export const SearchResult: React.FC<{ results: ItemResult[] }> = ({
  results,
}) => {
  return (
    <div className={styles.items}>
      {results.map((item) => (
        <div className={styles.itemCard} key={item.id}>
          <img src={item.image} className={styles.itemImage} alt={item.title} />
          <div className={styles.itemContent}>
            <p className={styles.itemPrice}>{convertNumberToRP(item.price)}</p>
            <a href={item.url} className={styles.itemTitle} title={item.title}>
              {item.title}
            </a>
            <div style={{ marginTop: "0.4rem" }}>
              {item.rating?.total > 0 && (
                <div className={styles.itemRating}>
                  <MdStar className={styles.icon} />
                  <span className={styles.textRating}>
                    {item.rating.star} dari {item.rating.total} ulasan
                  </span>
                </div>
              )}
              <SourceIcon store={item.store} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
