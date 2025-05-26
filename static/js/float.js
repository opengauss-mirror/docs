/**
 * @file 文档右下角浮窗相关脚本
 */
$(document).ready(() => {
    if (window.innerWidth > 1100) {
        $('.float-mobile').remove()
        $('.o-popup1 .submit-btn-mb').remove()
    } else {
        $('.float-mobile').show()
        $('#app.web .float-wrap').remove()
    }
    function toggleIsShow(toggle) {
        if (toggle) {
            $('.float-wrap .nav-box1 .item-nav .o-popup1').addClass('active')
        } else {
            $('.float-wrap .nav-box1 .item-nav .o-popup1').removeClass('active')
        }
    }
    $('.float-wrap .nav-box1 .item-nav.popup1').mouseenter(function () {
        toggleIsShow(true)
    })
    $('.float-wrap .nav-box1 .item-nav.popup1').mouseleave(function () {
        toggleIsShow(false)
    })
    $('.float-wrap .nav-box1 .item-nav.popup1 .icon-box').mouseleave(
        function () {
            setInit()
            $('.float-wrap .nav-box1 .item-nav .o-popup1').removeClass('show')
        }
    )

    const sliderTrack = $('.slider-body')
    const sliderHandle = $('#sliderHandle')
    const step = 10 // 调整这个值以设置步长大小

    const PLACEHOLDER1 = '请输入您不太满意的原因'
    const PLACEHOLDER2 = '改进哪些方面会让您更满意？'
    const PLACEHOLDER3 = '请输入您满意的原因'
    $('#textarea-input').attr('placeholder', PLACEHOLDER1)
    let score = 0
    let mark = '<div class="mark-item"></div>'
    for (let i = 0; i < step; i++) {
        mark += '<div class="mark-item"></div>'
    }
    $('.slider-track .mark .item-box,.slider-track .pre-mark').append(mark)
    function handleMouseMove(e) {
        const trackWidth = sliderTrack.width()
        $('.slider-track .mark .item-box').css('width', `${trackWidth}px`)
        const initialX = sliderTrack.offset().left
        let newLeft = e.clientX - initialX
        const stepSize = trackWidth / step
        newLeft = Math.max(0, Math.min(trackWidth, newLeft))
        newLeft = Math.round(newLeft / stepSize) * stepSize
        score = Math.ceil(newLeft / stepSize)
        sliderHandle.css('left', `${newLeft}px`)
        $('.mark').css('width', `${newLeft}px`)
        $('.slider-body .slider-tip').css('left', `${newLeft}px`)
        $('.slider-body .slider-tip').text(score)
        $('.o-popup1 .reason').show()
        $('.o-popup1 .submit-btn-mb .confirm-btn').removeClass('forbidden')
        $('.o-popup1 .slider-tip').show()
        $('.o-popup1').addClass('show')
        $('#textarea-input').placeholder = PLACEHOLDER1
        isResonShow = true
        if (score < 7) {
            $('#textarea-input').attr('placeholder', PLACEHOLDER1)
        } else if (score < 9) {
            $('#textarea-input').attr('placeholder', PLACEHOLDER2)
        } else {
            $('#textarea-input').attr('placeholder', PLACEHOLDER3)
        }
        $(`.tip-item`).removeClass('active')
        $(`.tip-item:eq(${score})`).addClass('active')
    }
    function setInit() {
        score = 0
        inputText = ''
        sliderHandle.css('left', `${0}px`)
        $('.mark').css('width', `${0}px`)
        $('.slider-body .slider-tip').css('left', `${0}px`)
        $('.slider-body .slider-tip').text(score)
        $('.o-popup1 .reason').hide()
        $('.o-popup1 .submit-btn-mb .confirm-btn').addClass('forbidden')
        $('.o-popup1 .slider-tip').hide()
        $('#textarea-input').placeholder = PLACEHOLDER1
        $('#textarea-input').val(inputText)
        $('#textarea-input+p span').html(inputText.length)
        $('.o-popup1').removeClass('show')
        $('.float-mobile .float-content').hide()
    }
    sliderTrack.on('mousedown', function () {
        sliderTrack.on('mousemove', handleMouseMove)
    })

    $(document).on('mouseup', function () {
        sliderTrack.off('mousemove', handleMouseMove)
    })
    sliderTrack.mouseleave(function () {
        sliderTrack.off('mousemove', handleMouseMove)
    })
    // 初始绑定一次mousemove事件
    sliderTrack.on('mousedown', handleMouseMove)
    // 点击回到顶部
    $('.float-wrap .nav-box2').on('click', function () {
        $('#right').scrollTop(0)
        $(window).scrollTop(0)
    })

    // 输入事件相关
    let inputText = ''
    $('#textarea-input').on('input', function (event) {
        inputText = event.target.value
        $('#textarea-input+p span').html(inputText.length)
    })
    $('#textarea-input').on('focus', function () {
        $('.float-wrap .input-area').addClass('is-focus')
    })
    $('#textarea-input').on('blur', function () {
        $('.float-wrap .input-area').removeClass('is-focus')
    })
    // 点击关闭
    $('.o-popup1 .icon-cancel').on('click', function () {
        setInit()
        toggleIsShow(false)
    })

    // 点击提交
    // 处理提示语 type:success 提交成功 error 提交失败
    function handleTip(type, tip = '') {
        if (type === 'success') {
            $('#float-tip').removeClass('error-tip')
            $('#float-tip').addClass('success-tip')
            $('#float-tip .tip-text').text('提交成功，感谢您的反馈！')
        } else {
            $('#float-tip').removeClass('success-tip')
            $('#float-tip').addClass('error-tip')
            $('#float-tip .tip-text').text(tip ? tip : 'Error !')
        }
        $('#float-tip').addClass('show')
        setTimeout(() => {
            $('#float-tip').removeClass('show')
        }, 2000)
    }
    function postScore() {
        const postData = {
            feedbackPageUrl: location.href,
            feedbackText: inputText,
            feedbackValue: score,
        }
        $.ajax({
            type: 'POST',
            url: '/api-search/search/nps?community=opengauss',
            data: JSON.stringify(postData),
            contentType: 'application/json; charset=utf-8',
            datatype: 'json',
            headers: {
                source: 'opengauss',
            },
            success: function (data) {
                const res = JSON.parse(data)
                if (res.code === 200) {
                    handleTip('success')
                    const submitTime = new Date().valueOf()
                    if (window.innerWidth < 1100) {
                        localStorage.setItem(
                            'submit-time-mobile',
                            JSON.stringify(submitTime)
                        )
                    } else {
                        localStorage.setItem(
                            'submit-time',
                            JSON.stringify(submitTime)
                        )
                    }
                    $('.float-mobile').remove()
                } else {
                    handleTip('error', res.msg)
                }
                setInit()
            },
            error: function () {
                handleTip('error')
                setInit()
            },
        })
    }
    $('.o-popup1 .submit-btn .o-button').on('click', function () {
        const lastSubmitTime = localStorage.getItem('submit-time')
        const intervalTime = 1 * 12 * 60 * 60 * 1000
        const nowTime = new Date().valueOf()
        if (lastSubmitTime) {
            const flag = nowTime - JSON.parse(lastSubmitTime) > intervalTime
            if (flag) {
                postScore()
            } else {
                handleTip('error', '请不要频繁提交！')
            }
        } else {
            postScore()
        }
    })
    // 浮窗移动端
    ;(function () {
        let tip = ''
        for (let i = 0; i < 11; i++) {
            tip =
                tip +
                `<div class="tip-item" style="left:${i * 10}%
    ">${i}</div>`
        }
        $('.o-popup1 .slider .slider-body .slider-tip-mb').append(tip)
        // 点击浮窗
        $('.float-mobile .float-head .head-title').on('click', function () {
            $('.float-content').show()
        })
        // 点击遮罩
        $('.float-mobile .float-content .float-mask').on('click', function () {
            $('.float-content').hide()
        })
        // 点击取消
        $(
            '.float-mobile .float-content .o-popup1 .submit-btn-mb .cancel-btn'
        ).on('click', function () {
            $('.float-content').hide()
            setInit()
        })
        // 移动端点击确定提交
        $(
            '.float-mobile .float-content .o-popup1 .submit-btn-mb .confirm-btn'
        ).on('click', function () {
            if (!$(this).hasClass('forbidden')) {
                console.log('发送')
                postScore()
            }
        })
        // 点击关闭移动端评分入口
        $('.float-mobile .float-head .icon-cancel').on('click', function () {
            $('.float-mobile').remove()
            const closeTime = new Date().valueOf()
            localStorage.setItem('close-float-time', JSON.stringify(closeTime))
        })
        // 移动端用户关闭后7天不展示,提交后30日内不出现入口
        ;(function () {
            const lastCloseTime = localStorage.getItem('close-float-time')
            const lastSubmitTime = localStorage.getItem('submit-time-mobile')
            const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000
            const thirtyInMilliseconds = 30 * 24 * 60 * 60 * 1000
            const nowTime = new Date().valueOf()
            if (lastCloseTime || lastSubmitTime) {
                let flag1
                let flag2
                if (lastCloseTime) {
                    flag1 =
                        nowTime - JSON.parse(lastCloseTime) >
                        sevenDaysInMilliseconds
                } else if (lastSubmitTime) {
                    flag2 =
                        nowTime - JSON.parse(lastSubmitTime) >
                        thirtyInMilliseconds
                }
                console.log(flag1, flag2)
                if (flag1 && flag2) {
                    $('.float-mobile').show()
                } else {
                    $('.float-mobile').remove()
                }
            } else {
                $('.float-mobile').show()
            }
        })()
    })()
    // 点击意见反馈
    $('.bug-box .bug-text').click(function () {
        const nowHref = location.pathname.replace('html', 'md')
        console.log(nowHref)
        if (nowHref === '/zh/' || nowHref === '/en/') {
            openUrl(
                `https://gitcode.com/opengauss/docs/blob/website-v2/content${nowHref}docmap/_index.md`
            )
        } else {
            const hrefArray = nowHref.split('/')
            const version = hrefArray[3]
            const lang = hrefArray[1]
            let targetHref = ''
            if (version.includes('lite')) {
                targetHref = nowHref.replace(
                    `/${lang}/docs/${version}/`,
                    `/${version
                        .replace('-lite', '')
                        .replace(
                            'latest',
                            'master'
                        )}/content/docs-lite/${lang}/`
                )
            } else {
                targetHref = nowHref.replace(
                    `/${lang}/docs/${version}/`,
                    `/${version.replace('latest', 'master')}/content/${lang}/`
                )
            }
            openUrl('https://gitcode.com/opengauss/docs/blob' + targetHref)
        }
    })
    // 关闭意见反馈
    $('.bug-box .icon-close').click(function () {
        $('.float-wrap .bug-box').remove()
    })
})
