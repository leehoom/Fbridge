/**
 * app分享
 * @param {string} title 标题.
 * @param {string} content 分享描述.
 * @param {string} url 分享url.
 * @param {string} imgUrl 分享图标url.
 * @param {string} shareto 分享到的地方.
 * @param {function} callback 分享后的回调.
 */
export function config(title, content, url=window.location.href,
imgUrl='https://img.58cdn.com.cn/fangrs/img/7fbe9179b04d2ffd9a660361aaa50af1.png',
shareto='QQ,SINA,WEIXIN,FRIENDS,COPY | ALL', callback=()=>{}) {
    window.rightBtnCallback = function() {
        WBAPP.shareInfo(title, url, imgUrl, '分享占位显示', content, shareto, '', '', '', callback);
    };
    WBAPP.extendRightBtn('top_right', '分享', 'rightBtnCallback');
}
