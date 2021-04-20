import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import styles from "../styles/SearchBox.module.css";

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openSuggestion, setOpenSuggestion] = useState(false);
  const inputNode = useRef<HTMLInputElement>();

  const handleChangeSearchValue = (value: string) => setSearchValue(value);

  const handleClickSuggestion = (value: string) => setSearchValue(value);

  const handleClickOutsideSuggestion = (e) => {
    if (inputNode.current.contains(e.target)) {
      return;
    }

    setOpenSuggestion(false);
  };

  useEffect(() => {
    setOpenSuggestion(searchValue !== "" ? true : false);

    document.addEventListener("mousedown", handleClickOutsideSuggestion);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSuggestion);
    };
  }, [searchValue]);

  return (
    <div className={styles.search}>
      <div className={styles.inputBox}>
        <input
          ref={inputNode}
          className={styles.input}
          type="text"
          name="search"
          id="search"
          placeholder="Cari barang apa aja"
          autoComplete="off"
          onChange={(event) => handleChangeSearchValue(event.target.value)}
        />
        <div className={styles.inputIcon}>
          <FiSearch size={24} />
        </div>
      </div>
      {openSuggestion && (
        <div className={styles.suggestion}>
          <ul>
            <li onClick={() => handleClickSuggestion("Suggestion 1")}>
              Suggestion 1
            </li>
            <li onClick={() => handleClickSuggestion("Suggestion 2")}>
              Suggestion 2
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
