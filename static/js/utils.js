/**
 * @file 本文件存放项目公用的工具函数
 */

// 本函数为模拟a标签打开新网页进而避免使用window.open被拦截
function openUrl(url = "#", target = "_blank") {
  let tempALink = document.createElement("a");
  tempALink.setAttribute("target", target);
  tempALink.setAttribute("id", "openWin");
  tempALink.setAttribute("href", url);
  document.body.appendChild(tempALink);
  document.getElementById("openWin").click();
  document.body.removeChild(tempALink);
}
