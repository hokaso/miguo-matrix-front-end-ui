import HttpKit from '@/utils/http-kit'

export default {
  findAllSwiper () {
    return HttpKit.post(`/client/swiper/find_all_exist`, "a").then(
      res => res.data
    )
  },
  findSomeArticle (form) {
    return HttpKit.post(`/client/article/find_some`, form).then(
      res => res.data
    )
  },
  findAllArticle (form) {
    return HttpKit.post(`/client/article/find_all_by_keywords`, form).then(
      res => res.data
    )
  },
  findOneArticle (id) {
    return HttpKit.get(`/client/article/find_one_by_id/${id}`).then(
      res => res.data
    )
  },
  findAllVideo (form) {
    return HttpKit.post(`/client/video/find_all_by_keywords`, form).then(
      res => res.data
    )
  },
  findOneVideo (id) {
    return HttpKit.get(`/client/video/find_one_by_id/${id}`).then(
      res => res.data
    )
  },
  getBilibili (id) {
    return HttpKit.get(`/bilibili?aid=${id}&cid=21890669&page=1&high_quality=1&danmaku=0`).then(
      res => res
    )
  }

}
