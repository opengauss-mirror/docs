$(function ($) {
  $(document).ready(function () {
    const lang = location.href.split("/")[3];

    $(
      "#h5-menu .h5-next i,#h5-menu .h5-prev i"
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
        $(`a[href='/zh/']`).addClass("active");
      } else if (lang === "en") {
        $(`a[href='/en/']`).addClass("active");
      } else {
        $(`a[href='/ru/']`).addClass("active");
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
      targetUrlArr = [];
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
        // $(".title-h2 .icon-help").removeClass("dark");
        $(".nav-menu a .h5-logo").removeClass("dark");
        _body.removeClass("light dark").addClass("light");
        localStorage.getItem("openeuler-theme", "light");
      } else {
        $(".theme-change i").removeClass("light dark").addClass(themeStyle);
        // $(".title-h2 .icon-help").addClass(themeStyle);
        $(".nav-menu a .h5-logo").addClass(themeStyle);
        _body.removeClass("light dark").addClass(themeStyle);
      }
      $(".theme-change i").click(function () {
        if ($(this).hasClass("light")) {
          // $(".title-h2 .icon-help").addClass("dark");
          $(".nav-menu a .h5-logo").addClass("dark");
          $(this).addClass("dark").removeClass("light");
          localStorage.setItem("openeuler-theme", "dark");
          _body.addClass("dark").removeClass("light");
        } else {
          $(".nav-menu a .h5-logo").removeClass("dark");
          // $(".title-h2 .icon-help").removeClass("dark");
          $(this).addClass("light").removeClass("dark");
          localStorage.setItem("openeuler-theme", "light");
          _body.addClass("light").removeClass("dark");
        }
      });
    })();
    // 点击logo回到文档首页
    $("#h5-menu-top .h5-logo .logo-img,.nav-box .h5-logo,.pc-logo").click(
      () => {
        window.open(`/${lang}/`, "_self");
      }
    );
    // 点击版本出现版本选择
    $(".h5_index .h5_nav .icon-servision").click(function () {
      $(this).toggleClass("open");
      $(".h5_index .h5_nav .option").toggleClass("option-show");
    });
    // 控制移动端菜单栏的显示
    $(".h5_index .h5_nav_left").click(function () {
      $(".h5_index .h5_nav").addClass("h5_nav_show");
      $(".zhezhao").css("display", "block");
      $(".zhezhao").css("height", "100vh");
      $(".zhezhao").css("position", "fixed");
    });
    $(".h5_index .icon-close").click(function () {
      $(".h5_index .h5_nav").removeClass("h5_nav_show");
      $(".zhezhao").css("display", "none");
    });
    // 根据语言控制版本选择的显示
    $("#version-select .option a[href^='/ru/']").addClass("option-ru-a");
    $("#h5-menu-top .option").addClass(`option-${lang}`);
    $("#h5-menu-top .option a[href^='/ru/']").addClass("option-ru-a");
    // 让markdown里面的目录隐藏
    // $(function ($) {
    //   $(".markdown ul li>a[href^='#']").parent().hide();
    // });
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
    // 版本跳转
    $("#version-select .option>span").click(function () {
      window.open($(this).attr("href"), "_self");
    });
   
     // 企业版、轻量版切换跳转
     function switchLiteEnterprise(href) {
      $.ajax({
        type: "get",
        url: href,
        dataType: "json",
        complete: function (res) {
          // 若页面不存在跳转法律声明页面
          if ((res.status === 404)) {
            window.open(
              location.origin +
                `/${lang}/docs/${
                  href.split("/")[5]
                }/docs/Releasenotes/%E6%B3%95%E5%BE%8B%E5%A3%B0%E6%98%8E.html`,
              "_self"
            );
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
    // 低版本不出现企业版与轻量版选择
    (function switchVersionHidden() {
      const version = location.pathname.split("/")[3];
      if (
        version.includes("3.0.0") ||
        version.includes("3.1.0") ||
        version.includes("latest")
      ) {
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
    // 文档下载按钮生成
    (function downloadLink() {
      const version = location.pathname.split("/")[3];
      const linkHref = {
        "3.0.0-lite": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-document-${lang}-3.0.0.zip`,
        "3.0.0": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-document-${lang}-3.0.0.zip`,
        "2.1.0": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.1.0/openGauss-document-${lang}-2.1.0.zip`,
        "2.0.1": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.1/openGauss-document-${lang}-2.0.1.zip`,
        "2.0.0": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-${lang}-2.0.0.zip`,
        "1.1.0": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.1.0/openGauss-document-${lang}-1.1.0-2021-01-12.zip`,
        "1.0.1": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.1/openGauss-document-${lang}-1.0.1-2020-10-12.zip`,
        "1.0.0": `https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/openGauss-document-${lang}-1.0.0-2020-09-10.zip`,
      };
      const svg = `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>切片</title>
          <g id="PC" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="学习/文档/内容样式/正常" transform="translate(-120.000000, -1150.000000)" fill="#FFFFFF">
                  <g id="编组-5" transform="translate(0.000000, 254.000000)">
                      <g id="按钮/主要按钮/light/高32px/nor/文字+右图标" transform="translate(40.000000, 886.000000)">
                          <g id="icon/24/arrow_forward" transform="translate(80.000000, 10.000000)">
                              <path d="M5.65,8.4 C5.7,8.45 5.8,8.5 5.9,8.5 L6.1,8.5 C6.2,8.5 6.3,8.45 6.35,8.4 L8.9,5.85 C9,5.75 9,5.6 8.9,5.5 C8.9,5.5 8.9,5.5 8.9,5.5 L8.55,5.15 C8.45,5.05 8.3,5.05 8.2,5.15 C8.2,5.15 8.2,5.15 8.2,5.15 L6.5,6.85 L6.5,1.75 C6.5,1.6 6.4,1.5 6.25,1.5 L5.75,1.5 C5.6,1.5 5.5,1.6 5.5,1.75 L5.5,6.85 L3.8,5.15 C3.7,5 3.5,5 3.45,5.1 C3.45,5.1 3.45,5.1 3.45,5.1 L3.1,5.45 C3,5.55 3,5.7 3.1,5.8 C3.1,5.8 3.1,5.8 3.1,5.8 L5.65,8.4 Z M10.5,9.5 L1.5,9.5 L1.5,10.5 L10.5,10.5 L10.5,9.5 Z" id="Icon-color"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`;
      let downLink = "";
      if (linkHref[version]) {
        downLink = linkHref[version];
      } else {
        $(".left .download-button").hide();
      }
      let downloadElement = null;
      if (lang === "zh") {
        downloadElement = `<button><a href="${downLink}">文档下载 ${svg}</a></button>`;
      } else {
        downloadElement = `<button><a href="${downLink}">Download ${svg}</a></button>`;
      }
      $(".left .download-button").html(downloadElement);
    })();
    // 解决因hugo版本渲染造成的页面内a标签锚点跳转失灵问题
    $("a").click(function () {
      const href = $(this).attr("href");
      if (href.split("")[0] === "#") {
        $.each($("h2"), (index, value) => {
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
  });
});
