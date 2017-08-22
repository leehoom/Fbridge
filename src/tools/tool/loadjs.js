/**
 * 动态添加js,请求回来之后在回调函数里面执行你的操作
 * @param {string} url js地址.
 * @param {function} callback 加载完毕的回调函数.
 */
export default function(url, callback) {
    /**
    * onload回调
    */
    function onload() {
        let readyState = script.readyState;
        if (typeof readyState == 'undefined' || /^(loaded|complete)$/.test(readyState)) {
            script.onload = script.onreadystatechange = null;
            script = null;
            callback && callback();
        }
    }
    let script = document.createElement('script');
    script.async = true;
    if (script.readyState) {
        script.onreadystatechange = onload;
    } else {
        script.onload = onload;
    }
    script.src = url;
    let parent = document.getElementsByTagName('head')[0] || document.body;
    parent.appendChild(script) && (parent = null);
}
