function convertSearchString(text) {
  return text.trim().replace(/\s\s+/g, ' ').split(' ').join('+');
}

export {
  convertSearchString
}