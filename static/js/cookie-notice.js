$(function () {
  // cookie管理
  const body = $("body");
  const pathname = window.location.pathname;
  const isEn = pathname.includes("/en/");
  const COOKIE_DOMAIN = ".opengauss.org";
  // 弹窗
  const ODialog = (function () {
    let elemDialog;

    // 创建按钮
    const createButtons = (btns) => {
      let btnTemp = "";
      btns.forEach((item) => {
        btnTemp += `<button class="o-button ${item.color} ${item.id}">${item.label}</button>`;
      });
      return btnTemp;
    };
    // 按钮事件
    const bindBtnsEvent = (btns) => {
      btns.forEach((item) => {
        const btn = elemDialog.querySelector(`.${item.id}`);
        btn.addEventListener("click", (e) => {
          hide();
          item.onClick();
        });
      });
    };

    // 初始化事件
    const initEvents = (shadeClose, closable) => {
      // 点击遮罩
      elemDialog.addEventListener("click", (e) => {
        if (shadeClose && e.target.className.includes("o-layer-mask")) {
          hide();
        }
      });
      // 点击关闭按钮
      if (closable) {
        const closed = elemDialog.querySelector(".o-dialog-closed");
        closed.addEventListener("click", hide);
      }
    };

    // 显示对话框
    const createDialog = (options) => {
      const {
        title,
        size = "medium",
        closable = true,
        content,
        dlgActions,
        shadeClose = true,
      } = options;

      const isBtns = dlgActions && dlgActions.length > 0;

      const dom = `
          <div class="o-layer-mask"></div>
          <div class="o-dialog o-dialog-${size}">
            <div class="o-dlg-main" >
              <div class="o-dlg-header">
                ${title}
                ${closable ? '<em class="o-dialog-closed"></em>' : ""}
              </div>
              <div class="o-scroller-container">${content}</div>
              ${
                isBtns
                  ? `<div class="manage-action">${createButtons(
                      dlgActions
                    )}</div>`
                  : ""
              }
            </div>
          </div>`;

      const newDialog = document.createElement("div");
      newDialog.classList.add("o-layer-dialog");
      newDialog.innerHTML = dom;
      document.body.appendChild(newDialog);

      elemDialog = newDialog;

      if (isBtns) {
        bindBtnsEvent(dlgActions);
      }
      initEvents(shadeClose, closable);
    };

    // 隐藏
    const hide = () => {
      if (elemDialog) {
        elemDialog.remove();
        elemDialog = null;
      }
    };

    return {
      show: createDialog,
      hide,
    };
  })();

  const cookieNotice = {
    COOKEY_KEY: "agreed-cookiepolicy",
    COOKIE_AGREED_STATUS: {
      NOT_SIGNED: "0", // 未签署
      ALL_AGREED: "1", // 同意所有cookie
      NECCESSARY_AGREED: "2", // 仅同意必要cookie
    },
    locale: {
      title: !isEn
        ? "openGauss社区重视您的隐私"
        : "openGauss Community Respects Your Privacy",
      desc: !isEn
        ? "我们在本网站上使用Cookie，包括第三方Cookie，以便网站正常运行和提升浏览体验。单击“全部接受”即表示您同意这些目的；单击“全部拒绝”即表示您拒绝非必要的Cookie；单击“管理Cookie”以选择接受或拒绝某些Cookie。需要了解更多信息或随时更改您的 Cookie 首选项，请参阅我们的 "
        : 'This site uses cookies from us and our partners to improve your browsing experience and make the site work properly. By clicking "Accept All", you consent to the use of cookies. By clicking "Reject All", you disable the use of unnecessary cookies. You can manage your cookie settings by clicking "Manage Cookies". For more information or to change your cookie settings, please refer to our',
      cookie: !isEn ? "《关于cookies》。" : "About Cookies.",
      cookieHref: `https://opengauss.org${!isEn ? "/zh" : "/en"}/cookies/`,
      action: [
        {
          btn: "全部接受",
          btnEn: "Accept All",
          type: "all",
        },
        {
          btn: "全部拒绝",
          btnEn: "Reject All",
          type: "refuse",
        },
        {
          btn: " 管理Cookie ",
          btnEn: " Manage Cookies ",
          type: "manage",
        },
      ],
      manageTitle: !isEn ? "管理Cookie" : "Manage Cookies",
      necessaryTitle: !isEn ? "必要Cookie" : "Strictly Necessary Cookies",
      necessaryDesc: !isEn
        ? "这些Cookie是网站正常工作所必需的，不能在我们的系统中关闭。它们通常仅是为了响应您的服务请求而设置的，例如登录或填写表单。您可以将浏览器设置为阻止Cookie来拒绝这些Cookie，但网站的某些部分将无法正常工作。这些Cookie不存储任何个人身份信息。"
        : "These cookies are necessary for the site to work properly and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as logging in or filling in forms. You can set the browser to block these cookies, but that can make parts of the site not work. These cookies do not store any personally identifiable information.",
      statisticsTitle: !isEn ? "统计分析Cookie" : "Analytics Cookies",
      statisticsDesc: !isEn
        ? "我们将根据您的同意使用和处理这些非必要Cookie。这些Cookie允许我们获得摘要统计数据，例如，统计访问量和访问者来源，便于我们改进我们的网站。"
        : "We will use these cookies only with your consent. These cookies help us make improvements by collecting statistics such as the number of visits and traffic sources.",
      enabled: !isEn ? "始终启用" : "Always active",
      manageAction: [
        {
          btn: "保存并接受",
          btnEn: "Save and Accept",
          type: "save",
        },
        {
          btn: "全部接受",
          btnEn: "Accept All",
          type: "allow-all",
        },
      ],
    },
    isNoticeVisible: true,
    removeCustomCookie(key) {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${location.hostname}; path=/`;
    },
    disableOA() {
      import("./modules/analytics.js")
        .then(({ disableOA }) => disableOA())
        .catch(() => {})
        .finally(() => {
          const prefix = "oa-openGauss";
          const keys = [];
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(prefix)) {
              keys.push(key);
            }
          }
          keys.forEach(k => localStorage.removeItem(k));
        });
    },
    // 移除百度统计相关脚本、storage和cookie
    removeHM() {
      const scripts = document.querySelectorAll('script.analytics-script');
      scripts.forEach((script) => script.remove());
      const hm = /^hm/i;
      document.cookie
        .split(';')
        .map((c) => c.trim())
        .forEach((c) => {
          const key = decodeURIComponent(c.split('=')[0]);
          if (hm.test(key)) {
            this.removeCustomCookie(key);
          }
        });
      [sessionStorage, localStorage].forEach((storage) => {
        const keys = [];
        for (let i = 0; i < storage.length; i++) {
          const key = storage.key(i);
          if (hm.test(key)) {
            keys.push(key);
          }
        }
        keys.forEach(key => storage.removeItem(key));
      });
    },
    enableOA() {
      import("./modules/analytics.js")
        .then(({ enableOA, reportPV }) => {
          enableOA();
          reportPV();
        })
        .catch(() => {});
    },
    enableHM() {
      // 百度统计
      window._hmt = window._hmt || [];
      var hm = document.createElement("script");
      hm.classList.add('analytics-script');
      hm.src = "https://hm.baidu.com/hm.js?46964f4a20949712c2ce1db681b384d4";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    },
    setCustomCookie: (cname, cvalue, day = 1) => {
      let expires = new Date(Date.now() + day * 864e5);
      if (expires) {
        expires = expires.toUTCString();
      }
      document.cookie = `${cname}=${cvalue};domain=${COOKIE_DOMAIN};expires=${expires};path=/`;
    },
    // 获取cookie值
    getCookieByKey: (key) => {
      const cookieArr = document.cookie.split("; ");
      for (let i = 0, len = cookieArr.length; i < len; i++) {
        const item = cookieArr[i];
        const rlt = item.split("=");
        if (rlt[0] === key) {
          return rlt[1];
        }
      }
    },
    // 是否未签署
    isNotSigned: () => {
      return (
        cookieNotice.getUserCookieStatus() ===
        cookieNotice.COOKIE_AGREED_STATUS.NOT_SIGNED
      );
    },
    // 是否同意所有
    isAllAgreed: () => {
      return (
        cookieNotice.getUserCookieStatus() ===
        cookieNotice.COOKIE_AGREED_STATUS.ALL_AGREED
      );
    },
    // 弹框 是否选中统计分析Cookie
    isManageAgreed: () => {
      return $(".statistics-switch").prop("checked");
    },
    // 显示/隐藏cookie提示
    toggleNoticeVisible: (val) => {
      const cookieMain = $(".cookie-notice");
      val ? cookieMain.show() : cookieMain.hide();
    },
    // 获取cookie状态
    getUserCookieStatus() {
      const { COOKIE_AGREED_STATUS, COOKEY_KEY } = this;
      const cookieVal = this.getCookieByKey(COOKEY_KEY) ?? "0";
      const cookieStatusVal = cookieVal[0];
      if (cookieStatusVal === COOKIE_AGREED_STATUS.ALL_AGREED) {
        return COOKIE_AGREED_STATUS.ALL_AGREED;
      } else if (cookieStatusVal === COOKIE_AGREED_STATUS.NECCESSARY_AGREED) {
        return COOKIE_AGREED_STATUS.NECCESSARY_AGREED;
      } else {
        return COOKIE_AGREED_STATUS.NOT_SIGNED;
      }
    },
    // cookie提示内容
    getCookieContent: () => {
      return `
<div class="cookie-notice" >
  <div class="cookie-notice-content">
    <div class="content-wrapper cookie-notice-wrap">
      <div class="cookie-notice-left">
        <p class="cookie-title">${cookieNotice.locale.title}</p>
        <p class="cookie-desc">
          ${cookieNotice.locale.desc}
          <a href="${
            cookieNotice.locale.cookieHref
          }" rel="noopener noreferrer" target="_blank">${
        cookieNotice.locale.cookie
      }</a>
        </p>
      </div>
      <div class="cookie-notice-right">
        ${cookieNotice.locale.action
          .map((item) => {
            return `<button class="o-button ${item.type}">${
              isEn ? item.btnEn : item.btn
            }</button>`;
          })
          .join("")}
      </div>
      <em class="cookie-close"></em>
    </div>
  </div>
</div>`;
    },
    // 弹框内容
    getManageContent: () => {
      return `
<div class="manage-content">
  <div class="manage-item">
    <div class="item-header">
      <span class="item-title">${cookieNotice.locale.necessaryTitle}</span>
      <span class="item-extra">${cookieNotice.locale.enabled}</span>
    </div>
    <p class="item-detail">
      ${cookieNotice.locale.necessaryDesc}
    </p>
  </div>
  <div class="manage-item">
    <div class="item-header">
      <span class="item-title">${cookieNotice.locale.statisticsTitle}</span>
      <span class="item-extra">
        <input type="checkbox" class="statistics-switch" is="o-switch">
      </span>
    </div>
    <p class="item-detail">
      ${cookieNotice.locale.statisticsDesc}
    </p>
  </div>
</div>`;
    },
    // 用户同意所有cookie
    acceptAll() {
      this.setCustomCookie(
        this.COOKEY_KEY,
        this.COOKIE_AGREED_STATUS.ALL_AGREED,
        180
      );
      this.toggleNoticeVisible(false);
      this.enableOA();
      this.enableHM();
    },
    // 用户拒绝所有cookie，即仅同意必要cookie
    rejectAll() {
      this.setCustomCookie(
        this.COOKEY_KEY,
        this.COOKIE_AGREED_STATUS.NECCESSARY_AGREED,
        180
      );
      this.toggleNoticeVisible(false);
      this.disableOA();
      this.removeHM();
    },
    removeNotice() {
      $(".cookie-notice").remove();
      document.removeEventListener("themechange", this.onThemeChange);
    },
    bindEvents() {
      const _this = this
      $(".cookie-notice-right button").on("click", function () {
        // 同意
        if ($(this).hasClass("all")) {
          _this.acceptAll();
          _this.removeNotice();
        }
        // 拒绝
        if ($(this).hasClass("refuse")) {
          _this.rejectAll();
          _this.removeNotice();
        }
        // 管理cookie
        if ($(this).hasClass("manage")) {
          // 加载弹窗
          ODialog &&
            ODialog.show({
              title: _this.locale.manageTitle,
              content: _this.getManageContent(),
              dlgActions: [
                {
                  id: "save",
                  label: isEn
                    ? _this.locale.manageAction[0].btnEn
                    : _this.locale.manageAction[0].btn,
                  color: "primary",
                  variant: "outline",
                  onClick: () => {
                    _this.isManageAgreed() ? _this.acceptAll() : _this.rejectAll();
                    _this.removeNotice();
                  },
                },
                {
                  id: "allow-all",
                  label: isEn
                    ? _this.locale.manageAction[1].btnEn
                    : _this.locale.manageAction[1].btn,
                  color: "primary",
                  variant: "outline",
                  onClick: () => {
                    _this.acceptAll();
                    $(".statistics-switch").prop("checked", true);
                    _this.removeNotice();
                  },
                },
              ],
            });
        }
      });

      // 隐藏cookie
      $(".cookie-close").on("click", function () {
        cookieNotice.toggleNoticeVisible(false);
      });
    },
    onThemeChange({ detail }) {
      $(".cookie-notice")?.attr("data-o-theme", detail || "light");
    },
    init() {
      document.addEventListener("themechange", this.onThemeChange);
      if (this.isNotSigned()) {
        body.append(this.getCookieContent());
        this.bindEvents();
        this.toggleNoticeVisible(true);
      }
      if (this.isAllAgreed()) {
        this.acceptAll();
      } else {
        this.disableOA();
        this.removeHM();
      }
    },
  };
  cookieNotice.init();
});
