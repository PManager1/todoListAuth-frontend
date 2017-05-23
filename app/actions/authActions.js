exports.authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id: user_id
  }
}

exports.unauthUser = {
    type: 'UNAUTH_USER'
}



// export.unauthUser = (user_id){
//   return {
//     type: 'UNAUTH_USER'
//   }
// }  5:0
