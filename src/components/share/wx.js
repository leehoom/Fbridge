/**
 * 微信分享
 * @param {string} title 标题.
 * @param {string} content 分享描述.
 * @param {string} url 分享url.
 * @param {string} imgUrl 分享图标url.
 * @param {string} shareto 分享到的地方.
 * @param {function} callback 分享后的回调.
 */
export function config(title, content, url = window.location.href,
imgUrl = 'https://img.58cdn.com.cn/fangrs/img/7fbe9179b04d2ffd9a660361aaa50af1.png',
shareto = 'QQ,SINA,WEIXIN,FRIENDS,TENCENT,QQSPACE', callback=()=>{}) {
    wx.ready(function() {
        const platform = shareto.split(',');
        if (platform.includes('FRIENDS')) {
            wx.onMenuShareTimeline({
                title: title,
                link: url,
                imgUrl: imgUrl,
                success: function() {
                    callback('1', 'FRIENDS');
                },
                cancel: function() {
                    callback('2', 'FRIENDS');
                },
            });
        }

        if (platform.includes('WEIXIN')) {
            wx.onMenuShareAppMessage({
                title: title,
                desc: content,
                link: url,
                imgUrl: imgUrl,
                success: function() {
                    callback('1', 'WEIXIN');
                },
                cancel: function() {
                    callback('2', 'WEIXIN');
                },
            });
        }

        if (platform.includes('QQ')) {
            wx.onMenuShareQQ({
                title: title,
                desc: content,
                link: url,
                imgUrl: imgUrl,
                success: function() {
                    callback('1', 'QQ');
                },
                cancel: function() {
                    callback('2', 'QQ');
                },
            });
        }

        if (platform.includes('TENCENT')) {
            wx.onMenuShareWeibo({
                title: title,
                desc: content,
                link: url,
                imgUrl: imgUrl,
                success: function() {
                    callback('1', 'TENCENT');
                },
                cancel: function() {
                    callback('2', 'TENCENT');
                },
            });
        }

        if (platform.includes('QQSPACE')) {
            wx.onMenuShareQQ({
                title: title,
                desc: content,
                link: url,
                imgUrl: imgUrl,
                success: function() {
                    callback('1', 'QQSPACE');
                },
                cancel: function() {
                    callback('2', 'QQSPACE');
                },
            });
        }
    });
    wx.error(function(res) {
        throw new Error('wx cinfig error:' + res);
    });
}
