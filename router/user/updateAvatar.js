const multer = require('multer')
const avatarPath = { desk: '' }
const upload = multer(avatarPath)

const fn = (req, res) => {
  // 1. 判断avatar文件夹中是否存在该用户的文件夹
  
  
  // 2. 
}

module.exports = {
  method: 'post',
  mws: upload.single('avatar'),
  fn,
}