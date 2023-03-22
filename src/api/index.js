import axios from "axios";

// let Base_Url = "http://music.cpengx.cn";
let Base_Url = "http://localhost:4000";

//获取轮播图的api, type:资源类型,对应以下类型,默认为 0 即 PC
// 0: pc 1: android 2: iphone 3: ipad
export function getBanners(type = 0) {
  return axios.get(`${Base_Url}/banner?type=${type}`);
}

//获取推荐歌单， limit: 取出数量 , 默认为 30 (不支持 offset)
export function getListHot(limit = 18) {
  return axios.get(`${Base_Url}/personalized?limit=${limit}`);
}

//歌单歌曲详情， id: 歌单id，可选参数： limit：限制获取歌曲的数量， offset：起始歌曲在歌单的下标
export function getListDetail(id, limit = 99) {
  return axios.get(`${Base_Url}/playlist/track/all?id=${id}&limit=${limit}`);
}

//歌单介绍， id: 歌单id
export function getListHeader(id) {
  return axios.get(`${Base_Url}/playlist/detail?id=${id}`);
}

//获取歌曲详情 ids: 音乐 id, 如 ids=347230
export function getMusic(ids) {
  return axios.get(`${Base_Url}/song/detail?ids=${ids}`);
}

//搜索 : 关键词 keywords
export function getSearch(keywords) {
  return axios.get(`${Base_Url}/search?keywords=${keywords}`);
}

//获取热门评论 : 必选参数 : id: 音乐 id; 可选参数 : limit: 取出评论数量,默认为 20; type为类型，0为歌曲
export function getComment(id, limit = 20) {
  return axios.get(`${Base_Url}/comment/hot?id=${id}&limit=${limit}&type=0`);
}

//推荐新音乐 : 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
export function getRecommendSong(limit = 10) {
  return axios.get(`${Base_Url}/personalized/newsong?limit=${limit}`);
}

//获取歌词 : id：音乐id
export function getLyric(id) {
  return axios.get(`${Base_Url}/lyric?id=${id}`);
}
