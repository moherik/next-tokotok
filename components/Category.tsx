import React, { useState } from "react";
import {
  FiBox,
  FiHardDrive,
  FiMenu,
  FiShoppingBag,
  FiSmartphone,
} from "react-icons/fi";

import styles from "../styles/Category.module.css";

export interface CategoryType {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export const Category: React.FC<{ onChange: (id: number) => void }> = ({
  onChange,
}) => {
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

  const [selectedId, setSelectedId] = useState<number>(0);

  const handleClickCategory = (itemId: number) => {
    onChange(itemId);
    setSelectedId(itemId);
  };

  return (
    <div className={styles.grid}>
      {categories.map((item) => (
        <div
          className={[
            styles.card,
            selectedId == item.id && styles.cardActive,
          ].join(" ")}
          key={item.id}
          onClick={() => handleClickCategory(item.id)}
        >
          <div className={styles.cardIcon}>{item.icon}</div>
          <h4 className={styles.cardTitle} title={item.name}>
            {item.name}
          </h4>
        </div>
      ))}
    </div>
  );
};
