$(async function ($) {
  var keyword = "";
  var selectedVersion = location.pathname.split("/")[3];
  const lang = location.href.split("/")[3];
  var searchMethods = {
    search: function (value, page, el) {
      const version = location.pathname.split("/")[3];
      let postData = {
        keyword: value,
        lang: lang,
        version: selectedVersion,
        page: page,
        pageSize: 10,
      };
      import("./modules/analytics")
        .then(({ reportSearch }) => reportSearch(postData))
        .catch(() => {});
      $.ajax({
        type: "POST",
        url: "/api-search/search/sort/docs",
        data: JSON.stringify(postData),
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        headers: {
          source: 'opengauss',
        },
        success: function (data) {
          let dataArr = [];
          let pag = null;
          if (data.obj && Array.isArray(data.obj.records)) {
            dataArr = data.obj.records;
            totalAmount = data.obj.count;
          } else {
            dataArr = [];
            totalAmount = 0;
          }
          if (page === 1) {
            pag = new Pagination({
              element: el || "#baseof-pagination",
              type: 1,
              pageIndex: 1,
              pageSize: 10,
              pageCount: pageCount,
              total: totalAmount,
              jumper: false,
              singlePageHide: false,
              prevText: "<",
              nextText: ">",
              disabled: false,
              currentChange: function (index) {
                searchMethods.search(decodeURI(keyword), index);
              },
            });
            $(".search-result>.title").find(".keyword").text(value);
          }
          searchMethods.solveData(dataArr, versionText, el);
        },
        error: function () {
          totalAmount = 0;
          $(".search-result>.title").find(".keyword").text(value);
        },
      });
    },
    solveData: function (result, text, el) {
      $(".search-result>ul").empty();
      if (!result.length) {
        $("#search_content").hide();
        if (el === "#pagination") {
          $(".search-result #pagination").hide();
          $(".search-result .no-data-mobile").show();
        } else {
          $(".search-result #baseof-pagination").hide();
          $(".search-result .no-data").show();
        }
        return;
      }
      $("#search_content").show();
      result.forEach(function (item) {
        let name = item.title.replace("<em>", "");
        name = name.replace("</em>", "");
        let url = "/" + item.path.replace("/master", "/latest") + ".html";
        $(".search-result>ul").append(
          "<li>" +
            '<div class="res-title">' +
            '<a href="' +
            searchMethods.escapeHTML(url) +
            `" target='_blank'>` +
            searchMethods.escapeHTML(item.title) +
            "</a>" +
            "</div>" +
            '<div class="res-desc">' +
            searchMethods.escapeHTML(item.textContent) +
            "</div>" +
            '<div class="res-vers">' +
            searchMethods.escapeHTML(text) +
            '：<span class="which-version">' +
            searchMethods.escapeHTML(item.version.replace("master", "latest")) +
            "</span>" +
            "</div>" +
            "</li>"
        );
      });

      if (el === "#pagination") {
        $(".search-result .no-data-mobile").hide();
        $(".search-result #pagination").show();
      } else {
        $(".search-result .no-data").hide();
        $(".search-result #baseof-pagination").show();
      }
    },
    escapeHTML: function (str) {
      return str.replace(/[&<>'"]/g, function (tag) {
        return (
          {
            "&": "&amp;",
            "'": "&#39;",
            '"': "&quot;",
          }[tag] || tag
        );
      });
    },
  };
  var pageCount = 5;
  $(".baseof_mask").click(function () {
    $(".baseof_mask").css("display", "none");
    $(".alert").css("display", "none");
    $("#result-container").css("display", "none");
    $("#title-evaluate").removeClass("bug-hide");
    $("body").css("overflow", "auto");
  });

  $(".search-header .icon-search").click(function (e) {
    keyword = $(".search-header .search-text").val();
    $("#search_content").css("display", "block");
    searchMethods.search(decodeURI(keyword), 1, "#baseof-pagination");
  });

  $(".search-header .search-text").keypress(function (e) {
    if (e.keyCode === 13) {
      keyword = $(".search-header .search-text").val();
      $("#search_content").css("display", "block");
      searchMethods.search(keyword, 1, "#baseof-pagination");
    }
  });
  $(document).ready(function () {
    $(".search-header .search-text").blur(function () {
      var value = $(this).val();
      value = $.trim(value);
      if (value == "") {
        searchMethods.search(decodeURI(value), 1, "#baseof-pagination");
        $(".search-result>#baseof-pagination").css("display", "none");
      }
    });
  });

  $(".white_search").click(function () {
    $(".searcher").css("display", "block");
    $(".mask-search-mobile").css("display", "block");
    var height = $(".h5_index").outerHeight(true) - 279;
    $(".mask-search-mobile").css("height", height);
    $("body").css("overflow", "hidden");
  });
  $(".cancel-btn").click(function () {
    $(".searcher").css("display", "none");
    $(".mask-search-mobile").css("display", "none");
    var height = $(".h5_index").outerHeight(true) - 279;
    $(".mask-search-mobile").css("height", height);
    $("body").css("overflow", "auto");
  });

  $(".mask-search-mobile").click(function () {
    $(".searcher").css("display", "none");
    $(".mask-search-mobile").css("display", "none");
    $(".h5_index .h5_nav").removeClass("h5_nav_show");
    $("body").css("overflow", "auto");
  });

  $(".search-mobile")
    .find(".search-btn")
    .click(function () {
      keyword = $(".search-mobile").find("input").val();
      $(".search-result").css("display", "none");
      searchMethods.search(keyword, 1, "#pagination");
    });
  $(".search-mobile input").keyup(function () {
    if ($(this).val() !== "") {
      $(".icon-clear").show();
    } else {
      $(".icon-clear").hide();
    }
  });
  $(".icon-clear").click(function () {
    $(".search-mobile input").val("");
    $(".icon-clear").hide();
  });
  $(".search-mobile .search-text").bind("change", function () {
    keyword = $(".search-mobile .search-text").val();
    $(".search-result").css("display", "block");
    searchMethods.search(keyword, 1, "#pagination");
  });
  var versionText = lang === "zh" ? "版本" : "Version";
  var totalAmount = 0;

  var currentScreen = document.body.clientWidth;
  if (currentScreen <= 1000) {
    pageCount = 3;
  }

  if (typeof keyword === "undefined") {
    $(".search-result").empty();
  } else {
    $(".search-result>.title").find(".keyword").text(decodeURI(keyword));
    $(".input .search-text").val(decodeURI(keyword));
    $(".search-mobile div").find("input").val(decodeURI(keyword));
  }

  var versionObj = lang === "zh" ? versionObjZh : versionObjEn;
  var insertOptionElement = "";
  var insertMobileOptionElement = "";

  if (selectedVersion) {
    $("#result-container .search-version-select").css("display", "none");
    $(".search-version-select-mb").css("display", "none");
  } else {
    Object.keys(versionObj).forEach((key) => {
      const v = versionObj[key];
      if (v.homeLitePath) {
        insertOptionElement += `<div class="search-version-select-option" data-version="${key}-lite">${key}-lite (${v.state})</div>`;
        insertMobileOptionElement += `<div class="search-version-select-option-mb" data-version="${key}-lite">${key}-lite (${v.state})</div>`;
      }
      insertOptionElement += `<div class="search-version-select-option" data-version="${key}">${key} (${v.state})</div>`;
      insertMobileOptionElement += `<div class="search-version-select-option-mb" data-version="${key}">${key} (${v.state})</div>`;
    });
    $("#result-container .search-version-select-option-panel").append(
      insertOptionElement
    );
    $(".search-version-select-option-panel-mb").append(
      insertMobileOptionElement
    );

    selectedVersion = "latest";
    $.each(
      $("#result-container .search-version-select-option"),
      function (_, e) {
        if (e.dataset.version === selectedVersion) {
          e.classList.add("search-version-select-option-active");
          $(
            "#result-container .search-header .search-version-select .version"
          ).text(e.dataset.version);
        }
      }
    );

    $.each($(".search-version-select-option-mb"), function (_, e) {
      if (e.dataset.version === selectedVersion) {
        e.classList.add("search-version-select-option-mb-active");
        $(".search-version-select-mb .version").text(e.dataset.version);
      }
    });

    $("#result-container .search-version-select").click(function (e) {
      const el = $("#result-container .search-version-select-option-panel");
      if (el.hasClass("search-version-select-option-panel-opened")) {
        $("#result-container .search-version-select").removeClass(
          "search-version-select-opened"
        );
        el.removeClass("search-version-select-option-panel-opened");
      } else {
        $("#result-container .search-version-select").addClass(
          "search-version-select-opened"
        );
        el.addClass("search-version-select-option-panel-opened");
      }

      $(document).one("click", function () {
        $("#result-container .search-version-select").removeClass(
          "search-version-select-opened"
        );
        $("#result-container .search-version-select-option-panel").removeClass(
          "search-version-select-option-panel-opened"
        );
      });
      e.stopPropagation();
    });

    $(".search-version-select-mb").click(function (e) {
      const el = $(".search-version-select-option-panel-mb");
      if (el.css("display") === "none") {
        el.css("display", "block");
      } else {
        el.css("display", "none");
      }

      $(document).one("click", function () {
        $(".search-version-select-option-panel-mb").css("display", "none");
      });
      e.stopPropagation();
    });

    $("#result-container .search-version-select-option").click(function () {
      $.each($("#result-container .search-version-select-option"), (_, e) => {
        e.classList.remove("search-version-select-option-active");
      });
      selectedVersion = this.dataset.version;
      this.classList.add("search-version-select-option-active");

      $.each($(".search-version-select-option-mb"), (_, e) => {
        e.classList.remove("search-version-select-option-mb-active");
        if (e.innerText === this.dataset.version) {
          e.classList.add("search-version-select-option-mb-active");
        }
      });

      if (this.dataset.version) {
        $("#result-container .search-version-select .version").text(
          this.dataset.version
        );
        $(".search-version-select-mb .version").text(this.dataset.version);
        $("#result-container .search-version-select .prefix-text").css(
          "display",
          "inline-block"
        );
        $(".search-version-select-mb .prefix-text").css(
          "display",
          "inline-block"
        );
      } else {
        $("#result-container .search-version-select .version").text(
          lang === "zh" ? "全部版本" : "All"
        );
        $(".search-version-select-mb .version").text(
          lang === "zh" ? "全部版本" : "All"
        );
        $("#result-container .search-version-select .prefix-text").css(
          "display",
          "none"
        );
        $(".search-version-select-mb .prefix-text").css("display", "none");
        $(".search-version-select-option-mb:first").addClass(
          "search-version-select-option-mb-active"
        );
      }

      const keyword = $(".search-header .search-text").val();
      if (keyword) {
        searchMethods.search(keyword, 1, "#baseof-pagination");
      }
    });

    $(".search-version-select-option-mb").click(function () {
      $.each($(".search-version-select-option-mb"), (_, e) => {
        e.classList.remove("search-version-select-option-mb-active");
      });
      selectedVersion = this.dataset.version;
      this.classList.add("search-version-select-option-mb-active");

      $.each($("#result-container .search-version-select-option"), (_, e) => {
        e.classList.remove("search-version-select-option-active");
        if (e.dataset.version === this.dataset.version) {
          e.classList.add("search-version-select-option-active");
          $("#result-container .search-version-select .version").text(
            e.innerText
          );
        }
      });

      if (this.dataset.version) {
        $("#result-container .search-version-select .version").text(
          this.dataset.version
        );
        $(".search-version-select-mb .version").text(this.dataset.version);
        $("#result-container .search-version-select .prefix-text").css(
          "display",
          "inline-block"
        );
        $(".search-version-select-mb .prefix-text").css(
          "display",
          "inline-block"
        );
      } else {
        $("#result-container .search-version-select .version").text(
          lang === "zh" ? "全部版本" : "All"
        );
        $(".search-version-select-mb .version").text(
          lang === "zh" ? "全部版本" : "All"
        );
        $("#result-container .search-version-select .prefix-text").css(
          "display",
          "none"
        );
        $(".search-version-select-mb .prefix-text").css("display", "none");
        $("#result-container .search-version-select-option:first").addClass(
          "search-version-select-option-active"
        );
      }

      const keyword = $(".search-mobile").find("input").val();
      if (keyword) {
        searchMethods.search(keyword, 1, "#pagination");
      }
    });
  }
});
