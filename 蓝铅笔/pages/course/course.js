// pages/home/home.js
const API = require("../../http/API")
const http = require("../../http/http")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList:[
            {
              name: "最新",
              index: 0
            },
            {
              name: "入门",
              index: 1
            },
            {
              name: "进阶",
              index: 2
            },
            {
              name: "免费",
              index: 3
            },
            {
              name: "文图",
              index: 4
            },
            {
              name: "兑换",
              index: 5
            },
            {
              name: "专题",
              index: 6
            },
        ],
        // 教程数据
        course:[],
        // 页
        page:1,
        // 数量
        limit:10,
        // 搜索
        title:'',
        type:1,
        page:1,
        limit:10,
        search:null,
        // 筛选
        filtrate:[],
        //筛选更多
        more:false,
        text:'查看更多',
        // 关键字
        keyword:''

    },
    onLoad(options) {
        this.getdata()
        //  筛选
        http(API.filtrate,{
        }).then(res=>{
            this.setData({
                filtrate:res.data.course_subjects
            })
            console.log(res.data.course_subjects);
        })
    },
  // 教程
    getdata(){
            http(API.course,{
                limit:this.data.limit,
                page:this.data.page,
            }).then(res=>{
            // console.log(res);
            this.setData({
                course: this.data.course.concat(res.data.data) 
            })
        })
    },
    getsearch(e){
        // if(e.detail.value){
            http(API.search,{
                type:1,
                page:1,
                limit:10,
                title: this.data.keyword
            }).then(res=>{ 
                console.log(res.data.data);
                this.setData({
                    search:res.data.data
                })
            })
            // console.log(e.detail.value);
        // }
  
    },
    bindblur(e){
        if(e.detail.value){
            this.setData({
                keyword:e.detail.value
            })
        }
      this.getsearch()
      this.getsearch({page: this.data.page + 1 })
     },
     more(){
         this.setData({
            more:!this.data.more,
            text:'收起'
        })
         console.log(this.data.more);
    },
    // 点击筛选
    Target(e){
        this.setData({
            keyword:e.currentTarget.dataset.item
        })
        this.getsearch()
        // console.log(e.currentTarget.dataset.item);
    },
    onReachBottom: function () {
        // console.log(123); 
        this.setData({page: this.data.page + 1 })
        this.getdata()
      }
})