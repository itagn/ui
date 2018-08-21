// 使用es5构建EventUtil构造函数

function EventUtil () {}

EventUtil.prototype.addHanlder = function (element, type, handler) {
  if (element.addEventListener) element.addEventListener(type, handler, false)
  else if (element.attachEvent) element.attachEvent('on' + type, handler)
  else element['on' + type] = handler
}
EventUtil.prototype.removeHanlder = function (element, type, handler) {
  if (element.removeEventListener) element.removeEventListener(type, handler, false)
  else if (element.detachEvent) element.detachEvent('on' + type, handler)
  else element['on' + type] = null
}
EventUtil.prototype.preventDefault = function (e) {
  if (e.preventDefault) e.preventDefault()
  else e.returnValue = false
}
EventUtil.prototype.stopPropagation = function (e) {
  if (e.stopPropagation) e.stopPropagation()
  else e.canceBubble = true
}
EventUtil.prototype.getEvent = function (e) {
  return e || window.event
}
EventUtil.prototype.getTarget = function (e) {
  return e.target || e.srcElement
}