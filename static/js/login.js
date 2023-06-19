const LOGIN_INFO = {
  photo: '',
  username: '',
  token: 'token',
};

var loginProxy = new Proxy(LOGIN_INFO, {
  get: function (target, key) {
    return target[key] || '';
  },
  set: function (target, key, value) {
    if (key === 'token') {
      if (value) {
        $('#opt_user .logined').show();
        $('#opt_user .login').hide();
      } else {
        $('#opt_user .logined').hide();
        $('#opt_user .login').show();
      }
    }
    if (key === 'photo') {
      if (value) {
        $('#opt_user .logined .img').show();
        $('#opt_user .logined .empty-img').hide();
      } else {
        $('#opt_user .logined .img').hide();
        $('#opt_user .logined .empty-img').show();
      }
      $('#opt_user .img')[0].src = value;
      $('#opt_user .img')[1].src = value;
    }
    if (key === 'username') {
      $('#opt_user .opt-name').text(value);
      $('#opt_user .opt-name')[0].title = value;
      $('#opt_user .opt-name')[1].title = value;
    }
    return (target[key] = value || '');
  },
});

// 登录相关接口
var LoginQuery = {
  params: {
    community: 'opengauss',
    client_id: '90aa315f895544359209920da32ff75a',
  },
  queryCourse: (token) => {
    return new Promise((resolve, reject) => {
      $.get({
        url: '/omapi/oneid/user/refresh',
        data: LoginQuery.params,
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        headers: {
          token,
        },
        success(result) {
          if (result) {
            resolve(result);
            return;
          }
          reject(result);
        },
        error(msg) {
          reject(msg);
        },
      });
    });
  },
  queryIDToken: (token) => {
    return new Promise((resolve, reject) => {
      $.get({
        url: '/omapi/oneid/logout',
        data: LoginQuery.params,
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        headers: {
          token,
        },
        success(result) {
          if (result) {
            resolve(result);
            return;
          }
          reject(result);
        },
        error(msg) {
          reject(msg);
        },
      });
    });
  },
};

var Login = {
  LOGIN_KEYS: {
    USER_TOKEN: '_U_T_',
  },

  setCookie(cname, cvalue, isDelete) {
    const deleteStr = isDelete ? 'max-age=0; ' : '';
    const domain = '.opengauss.org';
    const expires = `${deleteStr}path=/; domain=${domain}`;
    document.cookie = `${cname}=${cvalue}; ${expires}`;
  },

  getCookie(cname) {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },

  deleteCookie(cname) {
    this.setCookie(cname, 'null', true);
  },

  saveUserAuth(code = '') {
    if (!code) {
      this.deleteCookie(this.LOGIN_KEYS.USER_TOKEN);
    } else {
      this.setCookie(this.LOGIN_KEYS.USER_TOKEN, code, false);
    }
  },

  getUserAuth() {
    const token = this.getCookie(this.LOGIN_KEYS.USER_TOKEN) || '';
    if (!token) {
      this.saveUserAuth();
    }
    return {
      token,
    };
  },

  // 退出登录
  logout() {
    const { token } = this.getUserAuth();
    LoginQuery.queryIDToken(token)
      .then(() => {
        this.saveUserAuth();
        location.href = location.href;
      })
      .catch(() => {
        this.tokenFailIndicateLogin();
      });
  },

  // 刷新页面
  refreshPage() {
    window.location.reload();
  },

  showGuard() {
    const origin = 'https://id.opengauss.org';
    const { lang } = this.getLanguage();
    location.href = `${origin}/login?redirect_uri=${location.href}&lang=${lang}`;
  },

  setLogInfo(data, token = '') {
    const { photo = '', username = '' } = data;
    loginProxy.photo = photo;
    loginProxy.username = username;
    loginProxy.token = token;
  },

  // token失效
  tokenFailIndicateLogin() {
    this.setLogInfo({});
    this.saveUserAuth();
  },

  // 刷新后重新请求登录用户信息
  refreshInfo() {
    const { token } = this.getUserAuth();
    if (token) {
      LoginQuery.queryCourse(token).then((res) => {
        const { data } = res;
        if (
          Object.prototype.toString.call(data) === '[object Object]'
        ) {
          this.setLogInfo(data, token);
        }
      }).catch(() => {
        this.tokenFailIndicateLogin();
      });
    } else {
      this.setLogInfo({}, token);
    }
  },
  getLanguage() {
    if (location.pathname.includes('/zh/')) {
      return {
        lang: 'zh',
        language: 'zh-CN',
      };
    }
    return {
      lang: 'en',
      language: 'en-US',
    };
  },
};

$(function ($) {
  $(document).ready(function () {
    if (location.pathname.includes('/ru/')) {
      $('.opt-user').remove();
    }
  });
  Login.refreshInfo();
  $('#opt_user>.login').click(function () {
    Login.showGuard();
  });
  $('#opt_user .logout').click(function () {
    Login.logout();
  });
  $('#opt_user .zone').click(function () {
    const origin = 'https://id.opengauss.org';
    window.open(`${origin}/${Login.getLanguage().lang}/profile`, '_blank');
  });
});
