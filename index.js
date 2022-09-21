const THEME_ID = "theme-check";
const THEME_STORAGE = "theme";
const MODE_LIST = {
  "os-default": "os-default-icon",
  light: "light-icon",
  dark: "dark-icon",
};
const OPTION = {
  "--Please choose an option--": "",
  "OS Default": "os-default",
  Light: "light",
  Dark: "dark",
};

const html = document.documentElement;
const theme = window.localStorage.getItem(THEME_STORAGE);
const mode = theme || "os-default";

function init() {
  if (window && html) {
    // 插入 meta 标签
    let oMeta = document.createElement("meta");
    oMeta.content = "light dark";
    oMeta.name = "color-scheme";
    document.getElementsByTagName("head")[0].appendChild(oMeta);

    // 初始化类名
    html.className = mode;
    html.style.backgroundColor = "";
  }
  // 插入select
  let mySelect = document.createElement("select");
  mySelect.id = THEME_ID;

  Object.keys(OPTION).forEach((item) => {
    let text = item;
    let value = OPTION[text];
    mySelect.options.add(new Option(text, value)); //这个兼容IE与firefox
  });
  document.body.appendChild(mySelect);

  // 引入css
  loadStyle('index.css')
}
init();

const btn = document.getElementById(THEME_ID);
btn.addEventListener("change", changeTheme);
if (theme) {
  changeSelect(theme);
}

function loadStyle(url) {
  var link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

function changeSelect(optionVal) {
  for (let i = 0; i < btn.length; i++) {
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
