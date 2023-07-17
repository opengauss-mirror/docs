// 预览网站的初始化地址
const preInitUrlObj = {
  urlZh:
    '/zh/docs/latest/docs/Releasenotes/%E6%B3%95%E5%BE%8B%E5%A3%B0%E6%98%8E.html',
  urlEn: '/en/docs/latest/docs/Releasenotes/Terms-of-Use.html',
};
const pathName = location.pathname;
const langStr = pathName.split('/')[1];
const versionObj = langStr === 'zh' ? versionObjZh : versionObjEn;
const newVersion = Object.keys(versionObj)[1];
function initUrl(urlObj) {
  if (pathName === '/zh/') {
    window.open(urlObj.urlZh, '_self');
  } else if (pathName === '/en/') {
    window.open(urlObj.urlEn, '_self');
  }
}
// 因为存在一个最新版本文档的预览网站也是使用本仓库代码构建，所以这里针对预览网站做处理(特殊处理仅这一处)
if (location.origin === 'https://opengauss-docs-preview.test.osinfra.cn') {
  initUrl(preInitUrlObj);
} else if (pathName === '/zh/' || pathName === '/en/') {
  window.open(
    `/${langStr}/docs/${newVersion}` + versionObj[newVersion].homePath,
    '_self'
  );
}
const themeStyle = localStorage.getItem('openeuler-theme');
const html = document.getElementsByTagName('html')[0];
if (!themeStyle) {
  localStorage.getItem('openeuler-theme', 'light');
  html.classList.add('light');
} else {
  html.classList.add(themeStyle);
}
(function () {
  if (location.pathname.split('/')[3].includes('-lite')) {
    html.classList.add('lite');
  }
})();
