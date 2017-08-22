/**
 * 判断登录状态
 * @param {function} callback login callback.
 */
export function isLogin(callback) {
    window.isLoginCallback = callback;
    WBAPP.isLogin('isLoginCallback');
}

/**
 * 调用登录
 * @param {string} url url is just a placeholder.
 * @param {function} callback login callback.
 */
export function login(url, callback=()=>{}) {
    window.openMobileLoginCallback = callback;
    window.isLoginCallback = function(data) {
        if (data['state']) {// app端已经登录了
            return;
        }
        WBAPP.openMobileLogin('openMobileLoginCallback');
    };
    WBAPP.isLogin('isLoginCallback');
}

/**
 * 调用登出
 * @param {string} url url is just a placeholder.
 * @param {function} callback logout callback.
 */
export function logout(url, callback) {
    window.logoutCallback = callback;
    window.isLoginCallback = function(data) {
        if (!data['state']) {// app端已经登录了
            return;
        }
        WBAPP.logout('', 'logoutCallback');
    };
    WBAPP.isLogin('isLoginCallback');
}
