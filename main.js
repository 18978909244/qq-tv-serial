
const fs = require('fs')
const path = require('path')
const common = require('./common')
const handleHtml = require('./handler')




module.exports = async () => {
  let urls = common.urls
  console.log(`task start!`)
  for (let i = 0; i < urls.length; i++) {
    let all = []
    for (let j = 0; j < urls[i].maxPage; j++) {
      console.log(`开始${urls[i].year}第${j+1}页`)
      await common.sleep(2)
      let data = await common.fetchPage(urls[i].id, j)
      let lists = handleHtml(data)
      lists = lists.map(item => {
        item.year = urls[i].year
        return item
      })
      all = [...all, ...lists]
    }
    fs.existsSync(path.join(__dirname,'./dist'))||fs.mkdirSync(path.join(__dirname,'./dist'))
    fs.writeFileSync(path.join(__dirname, `./dist/${urls[i].year}.txt`), JSON.stringify(all))
    console.log(`${urls[i].year}.txt saved!`)
  }
  console.log('task end!')
}
