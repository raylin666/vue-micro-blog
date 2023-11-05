// 页面滚动至某个ID属性位置
export function scrollToById(id: string, behavior: ScrollBehavior = 'smooth') {
  document.getElementById(id)?.scrollIntoView({ behavior: behavior })
}
