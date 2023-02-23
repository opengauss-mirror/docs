// 预览网站的初始化地址
const preInitUrlObj = {
  urlZh:
    "/zh/docs/latest/docs/Releasenotes/%E6%B3%95%E5%BE%8B%E5%A3%B0%E6%98%8E.html",
  urlEn: "/en/docs/latest/docs/Releasenotes/Terms-of-Use.html",
};
// 官网网站的初始化地址
const initUrlObj = {
  urlZh: "/zh/docs/3.1.1/docs/BriefTutorial/BriefTutorial.html",
  urlEn: "/en/docs/3.1.1/docs/BriefTutorial/BriefTutorial.html",
};
function initUrl(urlObj) {
  const lang=location.pathname
  if (lang === "/zh/") {
    window.open(urlObj.urlZh, "_self");
  } else if (lang === "/en/") {
    window.open(urlObj.urlEn, "_self");
  }
}
// 因为存在一个最新版本文档的预览网站也是使用本仓库代码构建，所以这里针对预览网站做处理(特殊处理仅这一处)
if (location.origin === "https://opengauss-docs-preview.test.osinfra.cn") {
  initUrl(preInitUrlObj);
} else {
  initUrl(initUrlObj);
}
const themeStyle = localStorage.getItem("openeuler-theme");
const html = document.getElementsByTagName("html")[0];
if (!themeStyle) {
  localStorage.getItem("openeuler-theme", "light");
  html.classList.add("light");
} else {
  html.classList.add(themeStyle);
}
(function () {
  if (location.pathname.split("/")[3].includes("-lite")) {
    html.classList.add("lite");
  }
})();
