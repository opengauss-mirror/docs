if(location.pathname==='/zh/'){
  window.open("/zh/docs/3.1.0/docs/BriefTutorial/BriefTutorial.html","_self")
}else if(location.pathname==='/en/'){
  window.open("/en/docs/3.1.0/docs/BriefTutorial/BriefTutorial.html","_self")
}

const themeStyle = localStorage.getItem("openeuler-theme");
const html = document.getElementsByTagName("html")[0];
if (!themeStyle) {
  localStorage.getItem("openeuler-theme", "light");
  html.classList.add("light")
} else {
  html.classList.add(themeStyle)
}
(function () {
  if (location.pathname.split("/")[3].includes("-lite")) {
    html.classList.add("lite")
  }
})()


