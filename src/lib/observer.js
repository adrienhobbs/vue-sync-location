import ObserverItem from './observer-item'

const Observer = (function() {
  const items = []

  // adds 100 steps to observer
  const buildThresholdList = numSteps => {
    var thresholds = []
    for (var i = 1.0; i <= numSteps; i++) {
      var ratio = i / numSteps
      thresholds.push(ratio)
    }
    thresholds.push(0)
    return thresholds
  }

  // updates an observer item with current observer props
  const handleUpdate = entries => {
    entries.forEach(entry => {
      const item = items.filter(item => item.elm === entry.target)[0]
      item.update(entry)
    })
  }

  const LocationObserver = new IntersectionObserver(handleUpdate, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: buildThresholdList(100)
  })

  // create an observer and observer item
  const observe = ({ elm, vnode }) => {
    const newItem = Object.create(ObserverItem)

    // if an observer with the same root margin exists, use it, otherwise create a new one.
    LocationObserver.observe(elm)

    newItem.elm = elm
    newItem.vnode = vnode

    items.push(newItem)
  }

  return {
    observe
  }
})()

export default Observer
