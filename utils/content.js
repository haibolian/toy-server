const fs = require('fs')
const path = require('path')

/**
 * 
 * @param {string} directory 要搜索的目录
 * @param {boolean} useSubdirectories 是否遍历子目录
 * @param {regExp} regExp 要查找的文件的正则
 */
function content(directory, useSubdirectories = false, regExp = /.js$/){
  const fiels = []
  function readFiels(directory, useSubdirectories, regExp){
    if(!directory) throw Error('the directory is required')
    const dir = fs.readdirSync(directory)
    dir.forEach(fiel => {
      const fullPath = path.join(directory, fiel)
      const stat = fs.lstatSync(fullPath)
      if(stat.isDirectory()) {
        readFiels(fullPath, useSubdirectories, regExp)
      }else{
        if(regExp.test(fiel)){
          fiels.push({
            path: fullPath,
            result: require(fullPath),
            ...path.parse(fullPath)
          })
        }
      }
    })
  }
  readFiels(directory, useSubdirectories, regExp)
  
  return fiels
}

module.exports = content
