import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import styles from "../styles/SearchBox.module.css";

interface SearchBoxProps {
  value?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  type?: "email" | "text" | "password";
  required?: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onChange, ...rest }) => {
  const [openSuggestion, setOpenSuggestion] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  const handleChangeSearchValue = (val: string) => {
    setOpenSuggestion(val !== "" ? true : false);
    onChange(val);
  };

  const handleClickSuggestion = (val: string) => onChange(val);

  const handleClickOutsideSuggestion = (e) => {
    if (inputRef.current.contains(e.target)) {
      return;
    }

    setOpenSuggestion(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSuggestion);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSuggestion);
    };
  }, []);

  return (
    <div className={styles.search}>
      <div className={styles.inputBox}>
        <input
          required={rest.required}
          ref={inputRef}
          className={styles.input}
          type={rest.type}
          name={rest.name}
          placeholder={rest.placeholder}
          autoComplete="off"
          value={rest.value}
          onChange={(event) => handleChangeSearchValue(event.target.value)}
        />
        <button type="submit" className={styles.inputIcon}>
          <FiSearch size={24} />
        </button>
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
