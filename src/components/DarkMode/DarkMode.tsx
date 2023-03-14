import React from 'react';
import styles from './DarkMode.module.scss'

// 1
const setDark = () => {

  // 2
  localStorage.setItem("theme", "dark");

  // 3
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// 4
if (typeof window !== "undefined") {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

  var defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }
}




// 5
const toggleTheme: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className={styles.toggle_theme_rapper}>
      <label className="toggle_theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"

          // 6
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className={styles.slider.round}></div>
      </label>
    </div>
  );
};

export default DarkMode;