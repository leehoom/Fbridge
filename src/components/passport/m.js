/**
 * 判断登录状态
 * @param {function} callback login callback.
 */
export function isLogin(callback) {
    if (FBridge.cookie.get('PPU')) {
        callback({state: true});
    } else {
        callback({state: false});
    }
}

/**
 * 调用登录
 * @param {string} url 登录成功之后的跳转地址.
 */
export function login(url) {
    window.location.href = encodeURI('//m.m.58.com/login?path=' + url);
}

/**
 * 调用登出
 * @param {string} url 登出成功之后的跳转地址.
 */
export function logout(url) {
    window.location.href = '//passport.58.com/logout?path=' + url;
}
