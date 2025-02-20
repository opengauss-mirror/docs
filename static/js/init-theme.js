/**
 * @file 换肤初始化
 */
// 获取 cookie
function getCustomCookie(key) {
  const name = `${encodeURIComponent(key)}=`
  const decodedCookies = decodeURIComponent(document.cookie)
  const cookies = decodedCookies.split('; ')
  for (let cookie of cookies) {
      if (cookie.startsWith(name)) {
          return cookie.substring(name.length)
      }
  }

  return null
}
const APPEARANCE_KEY = 'openGauss-theme-appearance'

const themeStyle = getCustomCookie(APPEARANCE_KEY)
const html = document.getElementsByTagName('html')[0]
if (!themeStyle) {
  html.classList.add('light')
} else {
  html.classList.add(themeStyle)
}
