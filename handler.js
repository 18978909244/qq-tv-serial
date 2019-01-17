const cheerio = require('cheerio')

module.exports = (html) => {
  let $ = cheerio.load(html)

  let figuresList = $('ul.figures_list').find('li')
  let lists = []
  figuresList.each(function () {
    let name = $(this).find('.figure_title_score').find('a').text()
    let _count = $(this).find('.figure_count').children('span').text()
    let count
    if (_count) {
      if (_count[_count.length - 1] === '万') {
        count = Number(_count.replace('万', '0000'))
      } else if (_count[_count.length - 1] === '亿') {
        count = Number(_count.replace('亿', '00000000'))
      }
      lists.push({
        name,
        count
      })
    }
  })
  return lists
}