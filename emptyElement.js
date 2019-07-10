
export default element => {
  const children = element.childNodes
  let i = element.childNodes.length
  while (i--) {
    element.removeChild(children[i])
  }
}