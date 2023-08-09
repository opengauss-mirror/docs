'use strict';
// 分页器组件
var lang = $('html').attr('lang');
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i2 = 0; i < il; i2++)
      for (var a = arguments[i2], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
var Pagination = (function () {
  function Pagination(options) {
    this.options = {
      // 容器
      element: '',
      // 样式类型
      type: 1,
      // 当前页
      pageIndex: 1,
      // 每页显示数量
      pageSize: 0,
      // 按钮数量
      pageCount: 9,
      // 总条数
      total: 0,
      // 上一页文字
      prevText: '',
      // 下一页文字
      nextText: '',
      // 输入框跳转
      jumper: false,
      // 单页隐藏
      singlePageHide: true,
      // 是否禁用
      disabled: false,
      /**
       * @description 按钮事件回调
       * @param index [number] 当前页码
       */
      currentChange: function () {},
    };
    this.element = null;
    this.lis = [];
    this.home = null;
    this.last = null;
    this.prev = null;
    this.next = null;
    this.input = null;
    this.pageNum = 0;
    if (this.validate(options)) {
      this.init(options);
    }
  }
  Pagination.prototype.init = function (options) {
    this.setOptions(options);
    this.render();
  };
  // 渲染页面并绑定事件
  Pagination.prototype.render = function () {
    var _this_1 = this;
    var _a;
    var _this = this,
      li,
      active;
    // 总页数
    this.pageNum = Math.ceil(this.options.total / this.options.pageSize);
    // 清空元素
    this.element.innerHTML = '';
    // 单页隐藏
    if (this.pageNum === 1 && this.options.singlePageHide) return;
    // 最大页码
    if (this.options.pageIndex > this.pageNum)
      this.options.pageIndex = this.pageNum;
    // 最小页码
    if (this.options.pageIndex <= 0) this.options.pageIndex = 1;
    // 主体容器
    var container = this.createElement('div', '_page_container');
    // 页码容器
    var ul = this.createElement('ul', [
      '_pages',
      '_pages_' + this.options.type,
    ]);
    // 禁用上一页
    var prev_disabled = this.options.pageIndex <= 1 ? ['_disabled_c'] : [];
    // 手势禁止
    if (this.options.pageIndex <= 1 && this.options.disabled)
      prev_disabled.push('_disabled');
    // 首页
    if (this.options.type <= 1) {
      this.home = this.createElement(
        'li',
        __spreadArrays(['_home'], prev_disabled)
      );
      this.home.innerText = lang ? '首页' : 'First';
      this.home.addEventListener('click', function () {
        if (_this_1.options.pageIndex > 1) {
          _this_1.handleChangePage(1);
        }
      });
      ul.appendChild(this.home);
    }
    // 上一页
    this.prev = this.createElement(
      'li',
      __spreadArrays(
        ['_prev_'],
        prev_disabled,
        this.options.prevText ? ['_prev'] : ['_iconfont', 'iconzuo']
      )
    );
    // 上一页文字
    this.prev.innerText = this.options.prevText || '';
    // 上一页事件
    this.prev.addEventListener('click', function () {
      if (_this_1.options.pageIndex - 1 > 0) {
        _this_1.handleChangePage(_this_1.options.pageIndex - 1);
      }
    });
    ul.appendChild(this.prev);
    // 区间值
    var between = this.getBetween();
    for (var i = 1; i <= this.pageNum; i++) {
      if (i >= between.min && i <= between.max) {
        active =
          i === this.options.pageIndex ? ['_active_' + this.options.type] : [];
        // 手势禁止
        if (i === this.options.pageIndex && this.options.disabled)
          active.push('_disabled');
        li = this.createElement(
          'li',
          __spreadArrays(['_pages_li_' + this.options.type], active)
        );
        li.innerText = i.toString();
        li.setAttribute('data-index', i.toString());
        li.addEventListener('click', function () {
          if (this.dataset.index != _this.options.pageIndex) {
            _this.handleChangePage(Number(this.dataset.index));
          }
        });
        (_a = this.lis) === null || _a === void 0 ? void 0 : _a.push(li);
        ul.appendChild(li);
      }
    }
    // 禁用下一页
    var next_disabled =
      this.options.pageIndex >= this.pageNum ? ['_disabled_c'] : [];
    // 手势禁止
    if (this.options.pageIndex >= this.pageNum && this.options.disabled)
      next_disabled.push('_disabled');
    // 下一页
    this.next = this.createElement(
      'li',
      __spreadArrays(
        ['_next_'],
        next_disabled,
        this.options.nextText ? ['_next'] : ['_iconfont', 'iconGroup-']
      )
    );
    // 下一页文字
    this.next.innerText = this.options.nextText || '';
    // 下一页事件
    this.next.addEventListener('click', function () {
      if (_this_1.options.pageIndex < _this_1.pageNum) {
        _this_1.handleChangePage(_this_1.options.pageIndex + 1);
      }
    });
    let totalStr = '';
    if (lang === 'zh') {
      totalStr = '共 ';
    } else if (lang === 'en') {
      totalStr = 'Total ';
    } else {
      totalStr = 'Total ';
    }
    let tiaoStr = lang === 'zh' ? ' 条' : '';
    let t = document.createTextNode(totalStr + this.options.total + tiaoStr);
    container.appendChild(t);
    ul.appendChild(this.next);
    // 尾页
    if (this.options.type <= 1) {
      this.last = this.createElement(
        'li',
        __spreadArrays(['_last'], next_disabled)
      );
      this.last.innerText = lang ? '尾页' : 'Last';
      this.last.addEventListener('click', function () {
        if (_this_1.options.pageIndex < _this_1.pageNum) {
          _this_1.handleChangePage(_this_1.pageNum);
        }
      });
      ul.appendChild(this.last);
    }
    container.appendChild(ul);
    // 输入框跳转
    if (this.options.jumper) {
      // 容器
      var jumper = this.createElement('div', '_jumper');
      // 总页码
      var count = this.createElement('span', '_count');
      count.innerText =
        (lang ? '\u5171 ' : 'Total   ') +
        this.pageNum +
        (lang ? ' \u9875' : ' pages');
      jumper.appendChild(count);
      var text_1 = this.createElement('span');
      text_1.innerText = lang ? '前往' : 'Go to ';
      jumper.appendChild(text_1);
      var value_1 = 0;
      // 输入框
      this.input = this.createElement('input', '_jumper_input');
      this.input.type = 'number';
      this.input.value = this.options.pageIndex.toString();
      this.input.setAttribute('min', '1');
      this.input.setAttribute('max', this.pageNum.toString());
      var handle = ['blur', 'keydown'];
      handle.forEach(function (v) {
        _this_1.input.addEventListener(v, function (e) {
          if (e.type === 'keydown' && e.keyCode !== 13) {
            return;
          }
          value_1 = ~~this.value;
          if (value_1 < 1) value_1 = 1;
          if (value_1 > _this.pageNum) value_1 = _this.pageNum;
          // @ts-ignore
          this.value = value_1;
          if (value_1 !== _this.options.pageIndex)
            _this.handleChangePage(value_1);
        });
      });
      jumper.appendChild(this.input);
      var text_2 = this.createElement('span');
      text_2.innerText = lang ? '页' : '';
      jumper.appendChild(text_2);
      container.appendChild(jumper);
    }
    // 保存元素
    this.element.appendChild(container);
  };
  // 当前页改变事件
  Pagination.prototype.handleChangePage = function (index) {
    var _this_1 = this;
    this.options.pageIndex = index;
    var mode;
    var around = ['home', 'last', 'prev', 'next'];
    around.forEach(function (param) {
      if (param === 'home' || param === 'prev') {
        mode = index <= 1 ? 'add' : 'remove';
      }
      if (param === 'last' || param === 'next') {
        mode = index >= _this_1.pageNum ? 'add' : 'remove';
      }
      if (_this_1[param]) {
        _this_1[param].classList[mode]('_disabled_c');
        _this_1.options.disabled && _this_1[param].classList[mode]('_disabled');
      }
    });
    // 区间值
    var between = this.getBetween();
    var betweenList = this.generateArray(between.min, between.max);
    // 排它
    for (var i = 0; i < this.lis.length; i++) {
      mode = betweenList[i] === index ? 'add' : 'remove';
      this.lis[i].classList[mode]('_active_' + this.options.type);
      this.lis[i].setAttribute('data-index', betweenList[i]);
      this.lis[i].innerText = betweenList[i].toString();
      this.options.disabled && this.lis[i].classList[mode]('_disabled');
    }
    // @ts-ignore 修改input值
    if (this.options.jumper) this.input.value = index;
    // 回调
    typeof this.options.currentChange === 'function' &&
      this.options.currentChange(index);
  };
  // 根据当前页生成显示页码的最大页和最小页
  Pagination.prototype.getBetween = function () {
    // 最小下标
    var min = this.options.pageIndex - Math.floor(this.options.pageCount / 2);
    // 最小下标最大值
    if (min > this.pageNum - this.options.pageCount) {
      min = this.pageNum - this.options.pageCount + 1;
    }
    // 最小值
    if (min <= 1) min = 1;
    // 最大下标
    var max = this.options.pageIndex + Math.floor(this.options.pageCount / 2);
    // 最大下标最小值
    if (max < this.options.pageCount) max = this.options.pageCount;
    // 最大值
    if (max > this.pageNum) max = this.pageNum;
    return { min: min, max: max };
  };
  // 生成分页器展现的可以点击的页码
  Pagination.prototype.generateArray = function (start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  };
  // 生成分页器的dom元素并进行内容填充
  Pagination.prototype.createElement = function (tag, classList) {
    var dom = document.createElement(tag);
    if (classList) {
      if (classList instanceof Array) {
        classList.forEach(function (v) {
          dom.classList.add(v);
        });
      } else {
        dom.classList.add(classList);
      }
    }
    return dom;
  };
  // 判断是否有正确生成容器实例
  Pagination.prototype.validate = function (options) {
    if (!options) throw new Error('options of null');
    if (typeof options !== 'object') throw new Error('options not an object');
    if (!document.querySelector(options.element))
      throw new Error('element of null');
    ['type', 'pageIndex', 'pageSize', 'pageCount', 'total'].forEach(function (
      v
    ) {
      if (options[v]) {
        if (isNaN(options[v])) throw new Error(v + ' not an number');
        if (v === 'pageCount' && options[v] % 2 === 0)
          throw new Error(v + ' not an odd number');
      }
    });
    return true;
  };
  Pagination.prototype.setOptions = function (options) {
    // 容器
    this.element = document.querySelector(options.element);
    for (var name_1 in options) {
      if (options[name_1] !== void 0) {
        this.options[name_1] = isNaN(options[name_1])
          ? options[name_1]
          : +options[name_1];
      }
    }
  };
  return Pagination;
})();
