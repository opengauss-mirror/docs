$(function ($) {
  var keyword = "";
  const lang = location.href.split("/")[3];
  var searchMethods = {
    search: function (value, page, el) {
      // type: "docs",
      const version = location.pathname.split("/")[3];
      let postData = {
        keyword: value,
        lang: lang,
        version: version,
        page: page,
        pageSize: 10,
      };
      $.ajax({
        type: "POST",
        url: "/docs-search/search/sort/docs",
        data: JSON.stringify(postData),
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        headers: {
          Authorization:
            "Basic b3BlbmV1bGVyc2VydmVyOm9wZW5ldWxlcnNlcnZlckAxMjM0",
        },
        success: function (data) {
          let dataArr = [];
          let pag = null;
          if (data.obj) {
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
              pageCount: pagecount,
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
            // $(".search-result>.title").find(".res-amount").text(totalAmount);
            $(".search-result>.title").find(".keyword").text(value);
          }
          searchMethods.solveData(dataArr, versionText, page);
        },
        error: function () {
          totalAmount = 0;
          $(".search-result>.title").find(".keyword").text(value);
        },
      });
    },
    solveData: function (result, text) {
      $(".search-result>ul").empty();
      if (!result.length) {
        $("#search_content").hide();
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

        // $(".search-result>ul li")
        //   .find(".res-title")
        //   .click(function () {
        //     window.open($(this).attr("href"));
        //   });
      });
    },
    escapeHTML: function (str) {
      return str.replace(/[&<>'"]/g, function (tag) {
        return (
          {
            "&": "&amp;",
            // '<': '&lt;',
            // '>': '&gt;',
            "'": "&#39;",
            '"': "&quot;",
          }[tag] || tag
        );
      });
    },
  };
  $(".baseof_mask").click(function () {
    $(".baseof_mask").css("display", "none");
    $(".alert").css("display", "none");
    $("#result-container").css("display", "none");
    $("#title-evaluate").removeClass("bug-hide");
  });

  $(".search-header>.icon-search").click(function () {
    keyword = $(".search-header>.search-text").val();
    $("#search_content").css("display", "block");
    searchMethods.search(decodeURI(keyword), 1, "#baseof-pagination");
  });

  $(".search-header>.search-text").bind("keypress", function (event) {
    if (event.keyCode == "13") {
      keyword = $(".search-header>.search-text").val();
      $("#search_content").css("display", "block");
      searchMethods.search(decodeURI(keyword), 1, "#baseof-pagination");
    }
  });

  $(document).ready(function () {
    $(".search-header>.search-text").blur(function () {
      var value = $(this).val();
      value = $.trim(value);
      if (value == "") {
        searchMethods.search(decodeURI(value), 1, "#baseof-pagination");
        $(".search-result>#baseof-pagination").css("display", "none");
      }
    });
  });

  $("#search-input>.icon-search").click(function () {
    keyword = $("#search-input>.search-text").val();
    $("#search_content").css("display", "block");
    searchMethods.search(decodeURI(keyword), 1, "#web-pagination");
  });

  $("#search-input>.search-text").bind("keyup", function (event) {
    if (!$("#search-input>.search-text").val()) {
      $("#search_content").css("display", "none");
    }
    if (event.keyCode == "13") {
      keyword = $("#search-input>.search-text").val();
      $("#search_content").css("display", "block");
      searchMethods.search(decodeURI(keyword), 1, "#web-pagination");
    }
  });

  $(".white_search").click(function () {
    $(".searcher").css("display", "block");
    $(".mask-search-mobile").css("display", "block");
    var height = $(".h5_index").outerHeight(true) - 279;
    $(".mask-search-mobile").css("height", height);
  });
  $(".cancel-btn").click(function () {
    $(".searcher").css("display", "none");
    $(".mask-search-mobile").css("display", "none");
    var height = $(".h5_index").outerHeight(true) - 279;
    $(".mask-search-mobile").css("height", height);
  });

  $(".mask-search-mobile").click(function () {
    $(".searcher").css("display", "none");
    $(".mask-search-mobile").css("display", "none");
    $(".h5_index .h5_nav").removeClass("h5_nav_show");
  });

  $(".search-mobile")
    .find(".search-btn")
    .click(function () {
      keyword = $(".search-mobile").find("input").val();
      $(".search-result").css("display", "none");
      searchMethods.search(decodeURI(keyword), 1, "#pagination");
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
  $(".search-mobile>.search-text").bind("keypress", function (event) {
    if (event.keyCode == "13") {
      keyword = $(".search-mobile>.search-text").val();

      $(".search-result").css("display", "block");
      searchMethods.search(decodeURI(keyword), 1, "#pagination");
    }
  });
  var versionText = lang === "zh" ? "版本" : "Version";
  var totalAmount = 0;
  var pagecount = 5;
  var currentScreen = document.body.clientWidth;
  if (currentScreen <= 1000) {
    pagecount = 3;
  }

  if (typeof keyword === "undefined") {
    $(".search-result").empty();
  } else {
    $(".search-result>.title").find(".keyword").text(decodeURI(keyword));
    $(".input>.search-text").val(decodeURI(keyword));
    $(".search-mobile>div").find("input").val(decodeURI(keyword));
  }
});
