export default {
  get isPartiallyBelow() {
    return this.bottom > this.bottomThreshold && this.top < this.bottomThreshold
  },
  get isVisible() {
    return this.intersectionRatio > 0
  },
  get isPartiallyAbove() {
    return this.top < this.topThreshold && this.bottom > this.topThreshold
  },
  get bottom() {
    return this.rect.bottom
  },
  get top() {
    return this.rect.top
  },
  get rect() {
    return this.entry.boundingClientRect || this.elm.getBoundingClientRect()
  },
  get bottomThreshold() {
    return this.entry.rootBounds.bottom
  },
  get topThreshold() {
    return this.entry.rootBounds.top
  },
  get isAbove() {
    return this.bottom < this.topThreshold
  },
  get isBelow() {
    return this.top > this.bottomThreshold
  },
  get intersectionRatio() {
    return this.entry.intersectionRatio
  },
  copyPropsToVnode() {
    [
      'isAbove',
      'isBelow',
      'isPartiallyAbove',
      'isPartiallyBelow',
      'isVisible'
    ].forEach(prop => {
      this.vnode.context[prop] = this[prop]
    })
  },
  update(entry) {
    this.entry = entry
    this.copyPropsToVnode()
  }
}
