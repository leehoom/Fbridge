# FBbridge
* FBbridge 封装了app端、微信端以及m端的公共方法，向外提供统一接口。
* 当前版本号：1.0.1


# 注意事项
* FBridge必须在zepto之前引入，否则会导致微信方法调用无效

# 组件 

* ## passport
  *  ### isLogin (callback:function) 
     *  _判断登录状态_ **<app>**
     *  ##### <app,m,wx> ---- callback:({state:true|false})
     *  ##### 例子：FBridge.passport.isLogin(function(data){alert(data['state'])})
  *  ### login (url:string,callback:function) 
     *  _登录_ **<app,m,wx>**
     *  ##### <m,wx> ---- url:登录成功之后的跳转地址  
     *  ##### <app> ---- callback(state): state 0：登录成功1：登录失败 2：取消登录 
     *  ##### 例子：FBridge.passport.login(window.location.href,function(state){alert(state)})
  *  ### logout (url:string,callback:function) 
     *  _登录_ **<app,m,wx>**
     *  ##### <m,wx> ---- url:登录成功之后的跳转地址  
     *  ##### <app> ---- callback(state): state 0：登录成功1：登录失败 2：取消登录 
     *  ##### 例子：FBridge.passport.logout(window.location.href,function(state){alert(state)})
     *  ##### 问题：m,wx端url不跳转，app callback返回参数错误
* ## router
  *  ### redirect (href:string,pageTitle:string,nativeParameter:object|string) 
     *  _页面跳转_ **<app,m,wx>**
     *  ##### <m,wx,app> ---- href:跳转地址  
     *  ##### <app> ---- pageTitle:跳转H5页面的title 
     *  ##### <app> ---- nativeParameter:跳转native页面的参数，为空则跳转H5页面 
     *  ##### 例子：FBridge.router.redirect('http://m.***.com','title',nativeParrmeter)
     *  ##### 问题：跳转native目前是空白页，考虑到有可能参数失效，需要进一步测试
* ## track
  *  ### show (appPageType:string, mPageType:string, wxPageType:string,cate:string = '1',actionType:string = 'show') 
     *  _展现埋点_ **<app,m,wx>**
     *  ##### <app> ---- appPageType:app页面类型  
     *  ##### <m> ---- mPageType:m页面类型  
     *  ##### <wx> ---- wxPageType:wx页面类型  
     *  ##### <app> ---- cate:cate，默认为1
     *  ##### <app> ---- actionType:动作类型，默认为show
     *  ##### 例子：FBridge.<track class="show"></track>('pagetype')
  *  ### send (logMsg:string,actionType:string = 'click',cate:string = '1') 
     *  _发送埋点_ **<app,m,wx>**
     *  ##### <app,m,wx> ---- logMsg:log内容,发送时会自动添加前缀(m_、wx_、app_)
     *  ##### <app> ---- actionType:动作类型，默认为click
     *  ##### <app> ---- cate:cate，默认为1
     *  ##### 例子：FBridge.track.send('logMsg')
* ## share
  *  ### config (title,content,url,imgUrl,shareto,callback) 
     *  _分享设置_ **<app，wx>**
     *  ##### <app,wx> ---- title:分享标题
     *  ##### <app，wx> ---- content:分享描述
     *  ##### <app，wx> ---- url:分享地址，不传则默认当前地址
     *  ##### <app，wx> ---- imgUrl:分享图标链接，不传则默认**图标
     *  ##### <app，wx> ---- shareto:分享到的平台，app支持"QQ,SINA,WEIXIN,FRIENDS，wx支持QQ,WEIXIN,FRIENDS,TENCENT,QQSPACE.默认为全部支持
     *  ##### <app，wx> ----  callback(String:state, String:source) state: 0 失败 1成功 2取消 source: QQ | WEIXIN | FRIENDS | SINA | TENCENT | QQSPACE
     *  ##### 例子：FBridge.share.config('title', 'content', 'http://m.***.com', undefined, undefined, function (state, platform) { alert(state + ' ' + platform) })

# 工具 
* ## env
  * ### platform:string
     *  _平台环境_
     *  #### 值：app | m | wx
     *  #### 例子：alert(FBridge.env.platform)
* ## cookie
  * ### get(cname:string)
     *  _通过键名获取cookie值_
     *  ##### cname:cookie键名
     *  #### 例子：alert(FBridge.cookie.get('test'))
  * ### set(cname, cvalue, exdays)
     *  _设置cookie_
     *  ##### cname:cookie键名
     *  ##### cvalue:cookie值
     *  ##### exdays:cookie过期时间（单位：天）
     *  #### 例子：FBridge.cookie.set('test','test',1)
  * ### remove(cname:string)
     *  _通过键名删除cookie_
     *  ##### cname:cookie键名
     *  #### 例子：FBridge.cookie.remove('test')





 * ### loadjs(url：string, callback:function)
   *  _动态加载js，并在加载完成后执行回调_
   *  #### 例子：FBridge.loadjs('http://tracklog.***.com/referrer_m.js',function(){alert('finish')})

# 协同开发流程（初稿）
* ## 1.拉取代码，新建分支
  * ### git checkout -b 'daily/1.0.1(add_GEO)'
* ## 2.添加代码，打包测试
  * ### npm run build
* ## 3.提交代码
* ## 4.测试、审核代码，分支合并，新建版本号，更新文档，新版本上线，邮件通知
