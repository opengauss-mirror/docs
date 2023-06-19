// 本函数为模拟a标签打开新网页进而避免使用window.open被拦截
function openUrl(url = '#', target = '_blank') {
  let tempALink = document.createElement('a');
  tempALink.setAttribute('target', target);
  tempALink.setAttribute('id', 'openWin');
  tempALink.setAttribute('href', url);
  document.body.appendChild(tempALink);
  document.getElementById('openWin').click();
  document.body.removeChild(tempALink);
}
// 面包屑内容的读取与生成
function getTreeLink() {
  setTimeout(function () {
    let openEle = $(' #docstreeview .jstree-container-ul').find('.jstree-open');
    let lastBread = '';
    let h1 = $('.markdown h1');
    let title = '';
    if (h1.text()) {
      title = h1.text().trim();
    }
    if (openEle.length) {
      for (let i = 0; i < openEle.length; i++) {
        if (i < openEle.length) {
          let span = '<i></i>';
          $('.docs-a')
            .append(
              $(' #docstreeview .jstree-container-ul')
                .find('.jstree-open')
                .eq(i)
                .find('a')
                .first()
                .clone()
            )
            .append(span);
          lastBread = $(' #docstreeview .jstree-container-ul')
            .find('.jstree-open')
            .eq(i)
            .find('a')
            .first()
            .text();
        }
      }
    }
    if (title !== lastBread) {
      $('.docs-a').append(`<a>${title}</a>`);
    } else {
      $('.docs-a i:nth-last-of-type(1)').remove();
    }
    if (!$('.docs-a>a:nth-last-of-type(1)').html()) {
      $('.docs-a>a:nth-last-of-type(1)').remove();
    }
    const last1 = $('.docs-a>a:nth-last-of-type(1)').html();
    const last2 = $('.docs-a>a:nth-last-of-type(2)').html();
    if (last1 === last2) {
      $('.docs-a>a:nth-last-of-type(1)').remove();
      $('.docs-a>i:nth-last-of-type(1)').remove();
    }
  }, 100);
}
$(function ($) {
  const lang = location.href.split('/')[3];
  if (lang !== 'zh') {
    $('#title-evaluate .right-nav .nav-item').css('width', '82px');
    $('#title-evaluate .right-nav .nav-item').css('height', '82px');
  }
  var isEvaluate = false;
  var urlArr = window.location.pathname.split('/');
  var isAdd1 = $('#markdown>ul').first().find('li').children().is('ul');
  var isAdd4 = $('#markdown>ul').first().find('li').children().is('p');
  var isAdd2 = $('#markdown>ul').first().find('li').children().is('a');
  var isAdd3 = $('#markdown>.table-of-contents').first().find('ul');
  var evaluateParams = {
    name: '',
    path: '',
    lang: '',
    version: '',
    stars: 0,
  };
  evaluateParams.lang = lang;
  var versionStr = urlArr[3].replace('-lite', '');
  $('#version-select .option p,#menu-top-mobile .option>p').each(function () {
    if ($(this).children('.version-name').html() === versionStr) {
      $(this).addClass('active');
    }
  });
  if (evaluateParams.lang === 'en') {
    $('#version-select>span,#menu-mobile .sersion-mobile').text(
      'Version: ' + versionStr
    );
  } else if (evaluateParams.lang === 'zh') {
    $('#version-select>span,#menu-mobile .sersion-mobile').text(
      '版本: ' + versionStr
    );
  }
  $('#version-select').click(function (e) {
    $(this).children('.option').toggleClass('option-active');
    $(this).toggleClass('open-option');
    $(document).one('click', function () {
      $('#version-select .option').removeClass('option-active');
    });
    e.stopPropagation();
  });
  $('.h5_nav_left').click(function () {
    $('#all>.sidebar').addClass('show-left');
    $('.mask-mobile').show();
  });

  $('#menu-top-mobile .icon-close,.mask-mobile').click(function (e) {
    $('#all>.sidebar').removeClass('show-left');
    $('.mask-mobile').hide();
  });
  $('#menu-top-mobile .search-mobile')
    .find('.search-btn')
    .click(function () {
      keyword = $('#menu-top-mobile .search-mobile').find('input').val();
      window.location.href = '/' + lang + '/search.html?keyword=' + keyword;
    });
  $('#menu-top-mobile .select-box').click(function (e) {
    $('#menu-top-mobile .menu-select-box .option').toggleClass('option-show');
    $('.icon-servision').toggleClass('icon-open');
    e.stopPropagation();
  });
  if (isAdd1 && isAdd2 && !isAdd4) {
    let linkEle = $('#markdown>ul').first().clone();
    $('#title-evaluate>.title').append(linkEle);
  } else if (isAdd3) {
    $('#title-evaluate>.title').append(isAdd3);
  }
  $('#title-evaluate>.title')
    .find('li')
    .find('a')
    .click(function () {
      $('#title-evaluate>.title').find('li').find('a').removeClass('active');
      $(this).addClass('active');
    });
  // 回到顶部
  $('#title-evaluate .gotop').click(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  $('#title-evaluate .evaluate')
    .find('i')
    .click(function () {
      if (isEvaluate) {
        return false;
      } else {
        let arr = urlArr[6].split('.');
        let number = $(this).attr('key');
        evaluateParams.name = decodeURI(arr[0]);
        evaluateParams.path = urlArr[4] + '/' + urlArr[5] + '/' + urlArr[6];
        evaluateParams.version = urlArr[3];
        evaluateParams.stars = number;
        $.ajax({
          type: 'POST',
          url: '/docs-search/docs/reviews',
          data: JSON.stringify(evaluateParams),
          contentType: 'application/json; charset=utf-8',
          datatype: 'json',
          headers: {
            Authorization:
              'Basic b3BlbmV1bGVyc2VydmVyOm9wZW5ldWxlcnNlcnZlckAxMjM0',
          },
          success: function () {
            $('#title-evaluate .evaluate')
              .find('i')
              .slice(0, number)
              .addClass('active');
            isEvaluate = true;
          },
          error: function (data) {
            console.error(data);
          },
        });
      }
    })
    .mouseover(function () {
      $(this).find('div').show();
    })
    .mouseleave(function () {
      $('#title-evaluate .evaluate').find('i').find('div').hide();
    });
  // 意见反馈
  $('.question').click(function () {
    const nowHref = location.pathname.replace('html', 'md');
    const hrefArray = nowHref.split('/');
    const version = hrefArray[3];
    const lang = hrefArray[1];
    let targetHref = '';
    if (version.includes('lite')) {
      targetHref = nowHref.replace(
        `/${lang}/docs/${version}/`,
        `/${version
          .replace('-lite', '')
          .replace('latest', 'master')}/content/docs-lite/${lang}/`
      );
    } else {
      targetHref = nowHref.replace(
        `/${lang}/docs/${version}/`,
        `/${version.replace('latest', 'master')}/content/${lang}/`
      );
    }
    openUrl('https://gitee.com/opengauss/docs/blob' + targetHref);
  });
  getTreeLink();
});
