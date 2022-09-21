const THEME_ID = "theme-check";
const THEME_STORAGE = "theme";
const MODE_LIST = {
  "os-default": "os-default-icon",
  light: "light-icon",
  dark: "dark-icon",
};

const html = document.documentElement;
const theme = window.localStorage.getItem(THEME_STORAGE);
const mode = theme || "os-default";
const btn = document.getElementById(THEME_ID);

btn.addEventListener("change", changeTheme);
if (window && html) {
  html.className = mode;
  html.style.backgroundColor = "";
}
if (theme) {
  changeSelect(theme);
}

function changeSelect(optionVal) {
  for (i = 0; i < btn.length; i++) {
    if (btn[i].value == optionVal) {
      btn[i].selected = true;
    }
  }
}

function changeTheme(e) {
  const theme = e.target.value;
  if (window && html) {
    html.className = theme;
    html.style.backgroundColor = "";
    window.localStorage.setItem(THEME_STORAGE, theme);
  }
}

function getModeClass() {
  return MODE_LIST[mode];
}

export default btn;
