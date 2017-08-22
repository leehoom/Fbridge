/**
 * 用cookie名获取值
 * @param {string} cname cookie name.
 * @return {string} cookie value.
 */
export function get(cname) {
    let name = cname + '=';
    let decodedCookie;
    try{
        decodedCookie = decodeURIComponent(document.cookie);
    }catch (err) {
        decodedCookie = document.cookie;
    }
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

/**
 * 设置cookie名值以及过期时间
 * @param {string} cname cookie name.
 * @param {string} cvalue cookie value.
 * @param {string} exdays cookie expires (day).
 */
export function set(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = 'expires='+ d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

/**
 * 删除cookie
 * @param {string} name cookie name.
 */
export function remove(name) {
    document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
