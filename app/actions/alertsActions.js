exports.addAlert = (text) => {
  return {
    type: 'ADD_ALERT',
    text: text
  }
}

exports.removeAlert = (id) => {
return {
    type: 'REMOVE_ALERT',
    id
  }
}
