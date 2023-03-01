// pages/home/home.js
const API = require("../../http/API")
const http = require("../../http/http")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图片
        swiperItem:[],
        carousel:1,
        submenuList:[
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h9-b_1806.png',
                text:'免费教程'
            },
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h12-g_1806.png',
                text:'专业课程'
            },
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h2-p_2212.png',
                text:'大触直播'
            },
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h10-o_1806.png',
                text:'教程兑换'
            },
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h11-c_2212.png',
                text:'学员成长'
            },
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h11-c_1811.png',
                text:'每日一画'
            },
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h14-r_2212.png',
                text:'素材下载'
            },
            {
                imgUrl:'https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h5-p_2211.png',
                text:'社区问答'
            },
        ],

        hotTopic:[],
        // 问题
        questions:[],
        // 素材下载
        material:[]
    },
    onLoad(options) {
        // 轮播图
        http(API.slideshow).then(res=>{
            // console.log(res.data.data);
            this.setData({
                swiperItem:res.data.data
            })
        }),
        // 教程热门
        http(API.hotTopic).then(res=>{
            // console.log(res.data.slice(0,4));
            this.setData({
                hotTopic:res.data.slice(0,4)
            })
        }),
        // 问答
        http(API.questions).then(res=>{
            // console.log(res.data.slice(0,3));
            this.setData({
                questions:res.data.slice(0,3)
            })
        }),
        // 素材下载
        http(API.material).then(res=>{
            console.log(res.data.data.slice(2,5));
            this.setData({
                material:res.data.data.slice(2,5)
            })
        })
    },
})