/**
 * 发送埋点
 * @param {string} logMsg 埋点内容.
 */
export function send(logMsg) {
    window.clickLog('from=m_' + logMsg);
}
/**
 * 发送展现埋点，有待优化
 * @param {string} appPageType appPageType.
 * @param {string} mPageType mPageType.
 * @param {string} wxPageType wxPageType.
 * @param {string} cate cate码.
 * @param {string} actionType 埋点内容.
 */
export function show(appPageType, mPageType, wxPageType, cate = '1', actionType = 'show') {
    window.clickLog('from=' +mPageType);
}
