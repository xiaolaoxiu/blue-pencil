const baseurl = "https://m.lanqb.com"

module.exports = {
    // 轮播图
    slideshow: baseurl+"/api/home/banner?type=m&local_code=10&order=weight&limit=6",
    // 教程热门
    hotTopic: baseurl+"/api/home/series",
    // 问答
    questions:baseurl+"/api/home/heat/qa-list",
    // 素材下载
    material:baseurl+"/api/news",
    // 教程
    course:baseurl+"/api/course/video?type=1&page=1&limit=10",
    // 搜索
    search:baseurl+"/api/course/video",
    // 筛选 
    filtrate:baseurl+"/api/course-group-list"
}