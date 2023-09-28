// 初始化皮肤及版本

const pathName = location.pathname;
const langStr = pathName.split("/")[1];
const versionObj = langStr === "zh" ? versionObjZh : versionObjEn;
const themeStyle = localStorage.getItem("opengauss-theme");
const html = document.getElementsByTagName("html")[0];
if (!themeStyle) {
  localStorage.getItem("opengauss-theme", "light");
  html.classList.add("light");
} else {
  html.classList.add(themeStyle);
}
(function () {
  if (location.pathname.split('/').length >= 4 && location.pathname.split('/')[3].includes('-lite')) {
    html.classList.add('lite');
  }
})();
