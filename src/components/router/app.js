/**
 * app 页面跳转
 * @param {string} href 跳转url.
 * @param {string} pageTitle pageTitle.
 * @param {object | string} nativeParameter 跳转native页面所需参数.
 */
export function redirect(href, pageTitle, nativeParameter) {
    if(nativeParameter) {
        if(typeof nativeParameter == 'string') {
            nativeParameter = JSON.parse(nativeParameter);
        }
        WBAPP._nativeBridge(nativeParameter);
        return;
    }
    WBAPP.loadPage('link', href, pageTitle);
}
