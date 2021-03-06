// Usage uR.element.create("my-tag",attrs,options)
// element = <attrs.parent><my-tag {...attrs}></attrs.parent>
// options && riot.mount(element,options)

import riot from 'riot'
import emptyElement from './emptyElement'

export default (tagName, attrs, riot_opts) => {
  const element = document.createElement(tagName)
  if (attrs.parent) {
    if (typeof attrs.parent === 'string') {
      attrs.parent = document.querySelector(attrs.parent)
    }
    if (attrs.clear) {
      // #! TODO there's probably a better way to handle this
      // technically clear isn't an attribute, but we need a way to empty the parent
      emptyElement(attrs.parent)
      delete attrs.clear
    }
    attrs.parent.appendChild(element)
    delete attrs.parent
  }

  Object.assign(element, attrs)

  if (riot_opts) {
    try {
      riot.mount(element, riot_opts)
    } catch (e) {
      console.error('unable to mount', element, riot_opts)
      throw e
    }
  }
  return element
}
