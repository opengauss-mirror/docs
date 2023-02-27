// 本文件存放控制版本相关的跳转及下载的代码
$(document).ready(function () {
  const versionObjZh = {
    latest: {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink: "",
    },
    "3.1.1": {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink: "",
    },
    "3.1.0": {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.1.0/openGauss-document-zh-3.1.0.zip",
    },
    "3.0.0": {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-document-zh-3.0.0.zip",
    },
    "2.1.0": {
      homePath: "/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.1.0/openGauss-document-zh-2.1.0.zip",
    },
    "2.0.1": {
      homePath: "/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-zh-2.0.0.zip",
    },
    "2.0.0": {
      homePath: "/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-zh-2.0.0.zip",
    },
    "1.1.0": {
      homePath: "/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.1.0/openGauss-document-zh-1.1.0-2021-01-12.zip",
    },
    "1.0.1": {
      homePath: "/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.1/openGauss-document-zh-1.0.1-2020-10-12.zip",
    },
    "1.0.0": {
      homePath: "/docs/Quickstart/Quickstart.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/openGauss-document-zh-1.0.0-2020-09-10.zip",
    },
  };
  const versionObjEn = {
    latest: {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink: "",
    },
    "3.1.1": {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink: "",
    },
    "3.1.0": {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink: "",
    },
    "3.0.0": {
      homePath: "/docs/BriefTutorial/BriefTutorial.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-document-en-3.0.0.zip",
    },
    "2.1.0": {
      homePath: "/docs/Quickstart/learning-product-knowledge.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.1.0/openGauss-document-en-2.1.0.zip",
    },
    "2.0.1": {
      homePath: "/docs/Quickstart/learning-product-knowledge.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-en-2.0.0.zip",
    },
    "2.0.0": {
      homePath: "/docs/Quickstart/learning-product-knowledge.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-en-2.0.0.zip",
    },
    "1.1.0": {
      homePath: "/docs/Quickstart/learning-product-knowledge.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.1.0/openGauss-document-en-1.1.0-2021-01-12.zip",
    },
    "1.0.1": {
      homePath: "/docs/Quickstart/learning-product-knowledge.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.1/openGauss-document-en-1.0.1-2020-10-12.zip",
    },
    "1.0.0": {
      homePath: "/docs/Quickstart/Quickstart.html",
      downLink:
        "https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/openGauss-document-en-1.0.0-2020-09-10.zip",
    },
  };
  const version = window.location.pathname.split("/")[3];
  function jumpDocsHome(lang, version) {
    const versionObj = lang === "zh" ? versionObjZh : versionObjEn;
    const link =
      "/" +
      lang +
      "/docs/" +
      version +
      versionObj[version.split("-")[0]].homePath;
    window.open(link, "_self");
  }
  // 读取数据生成版本切换的element元素
  function createVersionSpan() {
    const versionObj = lang === "zh" ? versionObjZh : versionObjEn;
    let spanElement = "";
    Object.keys(versionObj).forEach((key) => {
      spanElement = spanElement + `<span>${key}</span>`;
    });
    $("#version-select .option,#menu-top-mobile .option").prepend(spanElement);
  }
  createVersionSpan();
  // 控制中英文切换
  $("#lang .lang-item,.theme-lang-mobile .lang a").click(function () {
    const linkLang = $(this).attr("name");
    jumpDocsHome(linkLang, version);
  });
  // 控制版本切换
  $("#version-select .option span,#menu-top-mobile .option>span").click(
    function () {
      jumpDocsHome(lang, $(this).html());
    }
  );
  // 文档下载按钮生成
  (function () {
    const version = location.pathname.split("/")[3];
    const versionObj = lang === "zh" ? versionObjZh : versionObjEn;
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
    if (versionObj[version] && versionObj[version].downLink) {
      downLink = versionObj[version].downLink;
    } else {
      $(".sidebar .download-button").hide();
    }
    let downloadElement = null;
    if (lang === "zh") {
      downloadElement = `<button><a href="${downLink}">文档下载 ${svg}</a></button>`;
    } else {
      downloadElement = `<button><a href="${downLink}">Download ${svg}</a></button>`;
    }
    $(".sidebar .download-button").html(downloadElement);
  })();
});
