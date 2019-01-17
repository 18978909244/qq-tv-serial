const axios = require('axios')

module.exports.sleep = (time = 1) => new Promise(resolve => setTimeout(resolve, time * 1000))

module.exports.fetchPage = (year, p = 0) => {
  return axios.get(`http://v.qq.com/x/list/tv?year=${year}&offset=${p*30}`).then(res => res.data)
}

module.exports.urls = [{
    year: 2018,
    id: 4060,
    maxPage: 36
  },
  {
    year: 2017,
    id: 2017,
    maxPage: 36
  },
  {
    year: 2016,
    id: 859,
    maxPage: 36
  },
  {
    year: 2015,
    id: 860,
    maxPage: 32
  },
  {
    year: 2014,
    id: 861,
    maxPage: 38
  },
  {
    year: 2013,
    id: 862,
    maxPage: 29
  },
  {
    year: 2012,
    id: 863,
    maxPage: 25
  },
  {
    year: 2011,
    id: 864,
    maxPage: 25
  },
  {
    year: 2010,
    id: 865,
    maxPage: 23
  }
]

