/*
 * @Descripttion:适配移动界面的rem单位
 * @version:
 * @Author: congsir
 * @Date: 2021-07-08 11:00:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-08 14:32:13
 */
(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
