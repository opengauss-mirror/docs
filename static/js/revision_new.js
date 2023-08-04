$(function ($) {
  $(document).ready(function () {
    const lang = location.href.split("/")[3];

    $(
      "#menu-mobile .next-mobile i,#menu-mobile .prev-mobile i"
    ).html(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32">
<title>arrow-right</title>
<path fill="currentColor"  d="M2.667 16.667v-1.333c0-0.368 0.298-0.667 0.667-0.667h21.56l-5.933-5.92c-0.126-0.125-0.197-0.296-0.197-0.473s0.071-0.348 0.197-0.473l0.947-0.933c0.125-0.126 0.296-0.197 0.473-0.197s0.348 0.071 0.473 0.197l8.187 8.173c0.188 0.187 0.293 0.442 0.293 0.707v0.507c-0.003 0.265-0.108 0.518-0.293 0.707l-8.187 8.173c-0.125 0.126-0.296 0.197-0.473 0.197s-0.348-0.071-0.473-0.197l-0.947-0.947c-0.125-0.123-0.196-0.291-0.196-0.467s0.071-0.344 0.196-0.467l5.933-5.92h-21.56c-0.368 0-0.667-0.298-0.667-0.667z"></path>
</svg>
`);
    $(
      ".pc-prev .icon-prev,.pc-next .icon-next"
    ).html(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
<title>arrow-right</title>
<path fill="currentColor"  d="M2.667 16.667v-1.333c0-0.368 0.298-0.667 0.667-0.667h21.56l-5.933-5.92c-0.126-0.125-0.197-0.296-0.197-0.473s0.071-0.348 0.197-0.473l0.947-0.933c0.125-0.126 0.296-0.197 0.473-0.197s0.348 0.071 0.473 0.197l8.187 8.173c0.188 0.187 0.293 0.442 0.293 0.707v0.507c-0.003 0.265-0.108 0.518-0.293 0.707l-8.187 8.173c-0.125 0.126-0.296 0.197-0.473 0.197s-0.348-0.071-0.473-0.197l-0.947-0.947c-0.125-0.123-0.196-0.291-0.196-0.467s0.071-0.344 0.196-0.467l5.933-5.92h-21.56c-0.368 0-0.667-0.298-0.667-0.667z"></path>
</svg>
`);
    // 根据目前语言激活语言切换相应颜色
    (function () {
      if (lang === "zh") {
        $(`a[name='zh']`).addClass("active");
      } else if (lang === "en") {
        $(`a[name='en']`).addClass("active");
      }
    })();
    // 生成当前页的二级目录导航
    (function () {
      let titleList = $("#markdown h2");
      let tocList = "";
      Object.keys(titleList).forEach((key, index) => {
        if (parseInt(key) === key * 1) {
          tocList =
            tocList +
            `<li><a href="#${titleList[index].id}">${titleList[key].textContent}</a></li>`;
        }
      });
      $("#toc-list").append(tocList);
      let targetUrlArr = [];
      let targetUrl = [];
      $(".book-toc #toc-list a[href]").each(function () {
        targetUrlArr.push($($(this).attr("href")));
      });
      targetUrl = targetUrlArr.filter(function (item) {
        return $(window).scrollTop() + 260 > item.offset().top;
      });
      if (targetUrl.length) {
        $(".book-toc #toc-list a[href]").removeClass("active");
        $(
          "a[href='#" + targetUrl[targetUrl.length - 1].attr("id") + "']"
        ).addClass("active");
      } else if ($(".book-toc #toc-list a[href]").length) {
        $(".book-toc #toc-list a[href]").removeClass("active");
        $(".book-toc #toc-list a[href]").eq(0).addClass("active");
      }
    })();
    // 根据滚动激活导航状态
    $(window).scroll(function () {
      let targetUrlArr = [];
      let targetUrl = [];
      $(".book-toc #toc-list li a[href]").each(function () {
        targetUrlArr.push($($(this).attr("href")));
      });
      try {
        targetUrl = targetUrlArr.filter(function (item) {
          return $(window).scrollTop() + 60 > item.offset().top;
        });
        if (targetUrl.length) {
          $(".book-toc #toc-list a[href]").removeClass("active");
          $(".book-toc #toc-list a[href]")
            .eq(targetUrl.length - 1)
            .addClass("active");
        }
      } catch (error) {
        console.log(error);
      }
    });
    // 换肤
    (function () {
      const themeStyle = localStorage.getItem("openeuler-theme");
      const _body = $("html");
      if (!themeStyle) {
        $(".theme-change i").removeClass("light dark").addClass("light");
        $(".nav-menu a .logo-mobile").removeClass("dark");
        _body.removeClass("light dark").addClass("light");
        localStorage.getItem("openeuler-theme", "light");
      } else {
        $(".theme-change i").removeClass("light dark").addClass(themeStyle);
        $(".nav-menu a .logo-mobile").addClass(themeStyle);
        _body.removeClass("light dark").addClass(themeStyle);
      }
      $(".theme-change i").click(function () {
        if ($(this).hasClass("light")) {
          $(".nav-menu a .logo-mobile").addClass("dark");
          $(this).addClass("dark").removeClass("light");
          localStorage.setItem("openeuler-theme", "dark");
          _body.addClass("dark").removeClass("light");
        } else {
          $(".nav-menu a .logo-mobile").removeClass("dark");
          $(this).addClass("light").removeClass("dark");
          localStorage.setItem("openeuler-theme", "light");
          _body.addClass("light").removeClass("dark");
        }
      });
    })();
    // 点击logo回到文档首页
    $(
      "#menu-top-mobile .logo-mobile .logo-img,.nav-box .logo-mobile,.pc-logo"
    ).click(() => {
      window.open(`https://www.opengauss.org/${lang}/`, "_blank");
    });
    // 点击版本出现版本选择
    $(".h5_index .h5_nav .icon-servision").click(function () {
      $(this).toggleClass("open");
      $(".h5_index .h5_nav .option").toggleClass("option-show");
    });
    // 控制移动端菜单栏的显示
    $(".h5_index .h5_nav_left").click(function () {
      $(".h5_index .h5_nav").addClass("h5_nav_show");
      $(".mask-search-mobile").css("display", "block");
      $(".mask-search-mobile").css("height", "100vh");
      $(".mask-search-mobile").css("position", "fixed");
    });
    $(".h5_index .icon-close").click(function () {
      $(".h5_index .h5_nav").removeClass("h5_nav_show");
      $(".mask-search-mobile").css("display", "none");
    });
    // 根据语言控制版本选择的显示
    $("#version-select .option a[href^='/ru/']").addClass("option-ru-a");
    $("#menu-top-mobile .option").addClass(`option-${lang}`);
    $("#menu-top-mobile .option a[href^='/ru/']").addClass("option-ru-a");
    // 尾部点击跳转
    $(".footer .footer-content .footer-option .footer-option-item a").click(
      function () {
        if ($(this).attr("link") === "service") {
          window.open(`https://status.openeuler.org/`);
        } else {
          window.open(
            `https://www.openeuler.org/${lang}/other/${$(this).attr("link")}/`
          );
        }
      }
    );
    // 首页卡片点击事件
    $("#document_content>div,.h5_content .hot_documentation>div").click(
      function () {
        window.open($(this).attr("href"), "_self");
      }
    );

    // 企业版、轻量版切换跳转
    function switchLiteEnterprise(href) {
      $.ajax({
        type: "get",
        url: href,
        dataType: "json",
        complete: function (res) {
          // 若页面不存在跳转法律声明页面
          if (res.status === 404) {
            let version = href.split("/")[5];
            const versionData = lang === "zh" ? versionObjZh : versionObjEn;
            if (version.includes("-lite")) {
              version = version.split("-")[0];
              window.open(
                location.origin +
                  `/${lang}/docs/${version}-lite/${versionData[version].homeLitePath}`,
                "_self"
              );
            } else {
              window.open(
                location.origin +
                  `/${lang}/docs/${version}/${versionData[version].homePath}`,
                "_self"
              );
            }
          } else {
            window.open(href, "_self");
          }
        },
      });
    }
    // 企业版与轻量版选择
    $(".switch-version>input").click(function () {
      const version = location.pathname.split("/")[3];
      if (version.includes("-lite")) {
        $(this).removeClass("lite");
        const targetUrl = location.href.replace("-lite", "");
        switchLiteEnterprise(targetUrl);
      } else {
        $(this).addClass("lite");
        const targetUrl = location.href.replace(version, version + "-lite");
        switchLiteEnterprise(targetUrl);
      }
    });
    $(".switch-version>.enterprise").click(function () {
      const version = location.pathname.split("/")[3];
      if (version.includes("-lite")) {
        $(".switch-version>input").removeClass("lite");
        const targetUrl = location.href.replace("-lite", "");
        switchLiteEnterprise(targetUrl);
      }
    });
    $(".switch-version>.lite").click(function () {
      const version = location.pathname.split("/")[3];
      if (!version.includes("-lite")) {
        $(".switch-version>input").addClass("lite");
        const targetUrl = location.href.replace(version, version + "-lite");
        switchLiteEnterprise(targetUrl);
      }
    });
    // 查看该版本是否有轻量版，有轻量版才显示切换按钮
    (function switchVersionHidden() {
      const version = location.pathname.split("/")[3].split("-")[0];
      const versionData = lang === "zh" ? versionObjZh : versionObjEn;
      if (versionData[version].homeLitePath) {
        $(".switch-version").addClass("switch-show");
      }
    })();
    // 通信矩阵表格处理
    (function tableHaddle() {
      const nowHref = location.href;
      if (nowHref.includes("%E9%80%9A%E4%BF%A1%E7%9F%A9%E9%98%B5")) {
        const table = $("#markdown>table")[0];
        $("#markdown").append(`<div class="table-box"></div>`);
        $("#markdown>.table-box").html(table);
      }
    })();
    //通信矩阵表格左右拖动
    function dragMovex(container) {
      let flag = false;
      let downX;
      let scrollLeft; //鼠标按下
      $(container).on("mousedown", function (event) {
        flag = true;
        downX = event.clientX;
        scrollLeft = $(this).scrollLeft();
      });
      //鼠标移动
      $(container).on("mousemove", function (event) {
        if (flag) {
          const movex = event.clientX;
          const scrollx = movex - downX;
          if (scrollx < 0 && scrollLeft > 0) {
            $(container).scrollLeft(scrollLeft - scrollx);
          } else {
            $(container).scrollLeft(scrollLeft - scrollx);
          }
        }
      });
      $(document).on("mouseup", function () {
        flag = false;
      });
    }
    dragMovex(".table-box");
    // 向表中插入数据页面的表格处理
    (function tableIllBox() {
      const nowHref = location.href;
      if (
        nowHref.includes(
          "%E5%90%91%E8%A1%A8%E4%B8%AD%E6%8F%92%E5%85%A5%E6%95%B0%E6%8D%AE"
        )
      ) {
        const table = $("#markdown>table:nth-of-type(2)");
        table.wrap(`<div class="table-ill"></div>`);
      }
    })();

    // 解决因hugo版本渲染造成的页面内a标签锚点跳转失灵问题
    $("a").click(function () {
      const href = $(this).attr("href");
      if (href && href.split("")[0] === "#") {
        $.each($("h2"), (value) => {
          if (value.id.includes(href.replace("#", ""))) {
            $("html,body").animate(
              {
                scrollTop: $("#" + value.id).offset().top,
              },
              500
            );
          }
        });
      }
    });
    // 给较长的导航栏文字增加title start
    function addNavTitle() {
      $(".jstree-anchor").mouseenter(function () {
        if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
          $(this).attr("title", $(this).text());
        }
      });
    }
    addNavTitle();
    // 观察导航栏节点是否发生变化
    const mutation = new MutationObserver(addNavTitle);
    const config = { childList: true, subtree: true };
    const targetNode = document.getElementById("docstreeview");
    mutation.observe(targetNode, config);
    // 给较长的导航栏文字增加title end
  });
});
// 控制左侧导航栏滚动
function handleNavScroll() {
  const firstNavElenent = $("#docstreeview>ul>li:nth-of-type(1)");
  if (!firstNavElenent.offset()) {
    return;
  }
  const firstNavTop = firstNavElenent.offset().top;
  const checkedTop = $(".jstree-clicked").offset().top;
  $(".nav")
    .stop()
    .animate(
      {
        scrollTop: checkedTop - firstNavTop,
      },
      500
    );
}
window.onload = function () {
  setTimeout(() => {
    handleNavScroll();
  }, 100);
};
