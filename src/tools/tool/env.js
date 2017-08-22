// 计算平台环境并导出
export let platform = '';
!function() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('WUBA') != -1) {
        platform = 'app';
    } else if (userAgent.indexOf('MicroMessenger') != -1) {
        platform = 'wx';
    } else {
        if(document.cookie.indexOf('58ua')!=-1) {
            platform = 'app';
        }else{
            platform = 'm';
        }
    }
}();
