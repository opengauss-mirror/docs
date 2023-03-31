$(function ($) {
  var keyword = "";
  $(".baseof_mask").click(function (e) {
    $(".baseof_mask").css("display", "none");
    $(".alert").css("display", "none");
    $("#result-container").css("display", "none");
    $("#title-evaluate").removeClass("bug-hide");
  });

  $(".search-header>.icon-search").click(function (e) {
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

  $("#search-input>.icon-search").click(function (e) {
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

  $(".white_search").click(function (e) {
    $(".searcher").css("display", "block");
    $(".mask-search-mobile").css("display", "block");
    var height = $(".h5_index").outerHeight(true) - 279;
    $(".mask-search-mobile").css("height", height);
  });
  $(".cancel-btn").click(function (e) {
    $(".searcher").css("display", "none");
    $(".mask-search-mobile").css("display", "none");
    var height = $(".h5_index").outerHeight(true) - 279;
    $(".mask-search-mobile").css("height", height);
  });

  $(".mask-search-mobile").click(function (e) {
    $(".searcher").css("display", "none");
    $(".mask-search-mobile").css("display", "none");
    $(".h5_index .h5_nav").removeClass("h5_nav_show");
  });

  $(".search-mobile")
    .find(".search-btn")
    .click(function (e) {
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
  // var versionText = '';
  // var articles = '';
  var totalAmount = 0;
  var pagecount = 5;
  var currentScreen = document.body.clientWidth;
  if (currentScreen <= 1000) {
    pagecount = 3;
  }
  if (lang === "zh") {
    versionText = "版本";
    articles = "openeuler_articles";
  } else if (lang === "en") {
    versionText = "version";
    articles = "openeuler_articles_en";
  }

  var searchMethods = {
    search: function (value, page, el) {
      if (value && el) {
        const search_event_id = `${value}${new Date().getTime()}${
          window["sensorsCustomBuriedData"]?.ip || ""
        }`;
        const obj = {
          search_key: value,
          search_event_id,
        };
        window["addSearchBuriedData"] = obj;
        let sensors = window["sensorsDataAnalytic201505"];
        sensors?.setProfile({
          profileType: "searchValue",
          ...(window["sensorsCustomBuriedData"] || {}),
          ...(window["addSearchBuriedData"] || {}),
        });
      }
      // type: "docs",
      const version = location.pathname.split("/")[3].replace("latest","master");
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
        error: function (data) {
          totalAmount = 0;
          $(".search-result>.title").find(".keyword").text(value);
        },
      });
    },
    solveData: function (result, text, page) {
      $(".search-result>ul").empty();
      if (!result.length) {
        $("#search_content").hide();
        return;
      }
      $("#search_content").show();
      result.forEach(function (item, index) {
        // let urlArr = item.path.split('/');
        let name = item.title.replace("<em>", "");
        name = name.replace("</em>", "");
        // console.log(urlArr);
        let url = "/" + item.path.replace("/master","/latest")+ ".html";
        $(".search-result>ul").append(
          "<li>" +
            '<div class="res-title" href="' +
            searchMethods.escapeHTML(url) +
            '">' +
            searchMethods.escapeHTML(item.title) +
            "</div>" +
            '<div class="res-desc">' +
            searchMethods.escapeHTML(item.textContent) +
            "</div>" +
            '<div class="res-vers">' +
            searchMethods.escapeHTML(text) +
            '：<span class="which-version">' +
            searchMethods.escapeHTML(item.version.replace("master","latest")) +
            "</span>" +
            "</div>" +
            "</li>"
        );

        $(".search-result>ul li")
          .find(".res-title")
          .click(function (e) {
            const searchKeyObj = {
              search_tag: "docs",
              search_rank_num: 10 * (page - 1) + (index + 1),
              search_result_total_num: totalAmount,
            };
            let sensors = window["sensorsDataAnalytic201505"];
            sensors.setProfile({
              profileType: "selectSearchResult",
              ...(item || {}),
              ...(window["sensorsCustomBuriedData"] || {}),
              ...(window["addSearchBuriedData"] || {}),
              ...searchKeyObj,
            });
            window.location.href = $(this).attr("href");
          });
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

  if (typeof keyword === "undefined") {
    $(".search-result").empty();
  } else {
    $(".search-result>.title").find(".keyword").text(decodeURI(keyword));
    $(".input>.search-text").val(decodeURI(keyword));
    $(".search-mobile>div").find("input").val(decodeURI(keyword));
  }
});
