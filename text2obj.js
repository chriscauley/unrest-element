export default obj => {
  // takes in a string or an object, returns an object like { text: String }
  if (typeof obj === 'string') {
    return { text: obj }
  }
  return obj
}
