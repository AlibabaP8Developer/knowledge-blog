// 配置网站的标题和描述
// npm install vuepress-theme-reco --save-dev
// 配置主题
// 鼠标点击效果
// npm install vuepress-plugin-cursor-effects -D
// 樱花效果
// npm install vuepress-plugin-sakura -D
// 音乐播放器
// npm install @vuepress-reco/vuepress-plugin-bgm-player -D
// 启动项目：npm run docs:dev

module.exports = {
    title: '蔡颖的博客',
    description: '蔡颖的博客',
    theme: 'reco',
    // theme: '@vuepress/blog',
    // sidebar: true,
    // article: true,
    // comment: false,
    // editLink: false,
// sidebar: false # 不显示侧边栏
// article: false # 不是文章页 (不显示面包屑栏、最近更新栏等)
// comment: false # 不显示评论栏
// editLink: false, # 不显示编辑按钮
    themeConfig: {
        author: "蔡颖",
        nav: [
          { 
            text: "首页", 
            link: "/home" 
          },
          {
            text: "友情链接",
            items: [
              { text: "掘金", link: "https://juejin.cn" },
              { text: "Github", link: "https://github.com" }
            ]
          },
          {
            text: "开源项目推荐",
            items: [
              { text: "JeecgBoot", link: "https://gitee.com/jeecg/jeecg-boot?_from=gitee_search" },
              { text: "若依", link: "https://gitee.com/y_project" },
              { text: "mall", link: "https://gitee.com/macrozheng/mall" },
              { text: "mall-swarm", link: "https://gitee.com/macrozheng/mall-swarm" },
              { text: "蘑菇博客", link: "https://gitee.com/moxi159753/mogu_blog_v2" },
              { text: "思维在线考试系统", link: "https://gitee.com/mindskip/xzs-mysql" },
              { text: "领课网络", link: "https://gitee.com/roncoocom/roncoo-education" },
              { text: "微信&支付宝支付案例", link: "https://gitee.com/pandaCodeSoftDev/payment-demo" },
              { text: "鸿蒙项目案例", link: "https://gitee.com/BruceLeeAdmin_admin/heima-healthy" }
            ]
          },
        ],
        sidebar: [
            {
                title: "Java",
                path: "/java/basis/java-basic-questions-01",
                collapsable: true,
                children: [
                    {
                        title: "基础",
                        path: "/java/basis/java-basic-questions-01",
                        collapsable: true,
                        children: [
                          { title: "Java基础(上)", path: "/java/basis/java-basic-questions-01.md" },
                          { title: "Java基础(中)", path: "/java/basis/java-basic-questions-02.md" },
                          { title: "Java基础(下)", path: "/java/basis/java-basic-questions-03.md" },
                        ]
                    },
                    {
                        title: "集合",
                        path: "/java/collection/java-collection-questions-01",
                        collapsable: true,
                        children: [
                          { title: "Java集合面试(上)", path: "/java/collection/java-collection-questions-01.md" },
                          { title: "Java集合面试(下)", path: "/java/collection/java-collection-questions-02.md" },
                          { title: "Java集合使用注意事项", path: "/java/collection/java-collection-precautions-for-use.md" },
                          { title: "Java集合相关面试题", path: "/java/collection/Java集合相关面试题.md" },
                        ]
                    },
                    {
                        title: "JVM",
                        path: "/java/jvm/JVM相关面试题",
                        collapsable: true,
                        children: [
                            {
                                title: 'JVM相关面试题',
                                path: '/java/jvm/JVM相关面试题.md'
                            },
                        ]
                    }
                ]
            },
            {
                title: "数据库",
                path: "/mysql/MySQL面试题-参考回答",
                collapsable: true,  // 是否折叠
                children: [
                    {
                        title: "MySQL", path: "/mysql/MySQL面试题-参考回答" ,
                        collapsable: true,
                        children: [
                          { title: "MySQL面试题-参考回答", path: "/mysql/MySQL面试题-参考回答.md" },
                          { title: "MySQL-Linux安装", path: "/mysql/MySQL-Linux安装.md" },
                          { title: "MyCat安装文档", path: "/mysql/MyCat安装文档.md" },
                          { title: "MySQL运维篇", path: "/mysql/MySQL运维篇.md" },
                          { title: "MySQL进阶篇", path: "/mysql/MySQL进阶篇.md" },
                          { title: "MySQL基础篇", path: "/mysql/MySQL基础篇.md" },
                        ]
                    },
                    {
                        title: "Redis", path: "/redis/Redis面试题-参考回答",
                        collapsable: true,
                        children: [
                            { title: "Redis面试题-参考回答", path: "/redis/Redis面试题-参考回答.md" },
                            { title: "Redis单机安装&集群&哨兵", path: "/redis/Redis集群.md" },
                            { title: "Redis实战", path: "/redis/Redis实战篇.md" },
                            { title: "Redis多级缓存", path: "/redis/多级缓存.md" },
                            { title: "Redis最佳实践", path: "/redis/Redis高级篇之最佳实践.md" },
                            { title: "Redis分布式缓存", path: "/redis/Redis高级-分布式缓存.md" },
                            { title: "Redis原理篇", path: "/redis/原理篇.md" },
                        ]
                    },
                    {
                      title: "ElasticSearch", path: "/es/search01",
                      collapsable: true,
                      children: [
                          { title: "elasticsearch(上)", path: "/es/search01.md" },
                          { title: "elasticsearch(中)", path: "/es/day02/search02.md" },
                          { title: "elasticsearch(下)", path: "/es/day03/search03.md" },
                          { title: "elasticsearch安装部署", path: "/es/install-elasticsearch.md" },
                      ]
                  },
                ],
            },
            {
                title: "运维",
                path: "/linux/Linux常用命令",
                collapsable: true,  // 是否折叠
                children: [
                    { title: "Linux常用命令", path: "/linux/Linux常用命令.md" },
                    { title: "Linux配置JDK", path: "/linux/Linux配置JDK.md" },
                ],
            },
            {
                title: "Docker",
                path: "/docker/docker-install",
                collapsable: true,  // 是否折叠
                children: [
                    { title: "Docker(上)", path: "/docker/docker-install.md" },
                    { title: "Docker(中)", path: "/docker/docker-basic.md" },
                    { title: "Docker(下)", path: "/docker/docker-use.md" },
                ],
            },
            {
                title: "Nginx",
                path: "/nginx/day1/Nginx_day01",
                collapsable: true,  // 是否折叠
                children: [
                    { title: "Nginx安装及基本介绍", path: "/nginx/day1/Nginx_day01.md" },
                    { title: "Nginx静态资源部署及解决跨域", path: "/nginx/day2/Nginx_day02.md" },
                    { title: "功能配置/反向代理/安全控制/Lua", path: "/nginx/day3/Nginx_day03.md" },
                    { title: "Nginx负载均衡与Nginx缓存集成", path: "/nginx/day4/Nginx_day04.md" },
                    { title: "服务器端集群搭建/用户认证模块", path: "/nginx/day5/Nginx_day05.md" },
                ],
            }
        ]
    },
    plugins: [
        [
          "cursor-effects",
          {
            size: 4, // size of the particle, default: 2
            shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
          },
        ],
        [
            "sakura",
            {
              num: 20, // 默认数量
              show: true, //  是否显示
              zIndex: -1, // 层级
              img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
              },
            },
        ],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
              audios: [
                {
                  name: "心经",
                  artist: "Plastic / Fallin` Dild",
                  url: "https://ri-sycdn.kuwo.cn/ce821436fee17ad9aa18c078095d9ba8/65faee81/resource/n2/31/36/3230906742.mp3",
                  cover: "https://img3.kuwo.cn/star/albumcover/500/90/63/432457598.jpg",
                },
                {
                  name: "大悲咒",
                  artist: "최낙타",
                  url: "https://assets.smallsunnyfox.com/music/3.mp3",
                  cover:
                    "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
                },
              ],
              // 是否默认缩小
              autoShrink: true,
              // 缩小时缩为哪种模式
              shrinkMode: "float",
              // 悬浮窗样式
              floatStyle: { botton: "50px", "z-index": "200" },
            },
        ],
     ],
     head: [
        [
            "meta",
            {
              name:"referrer",
              content:"no-referrer"
            }
        ],
     ],
}
