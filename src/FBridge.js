import * as tools from './tools/tools.js';
import * as components from './components/components.js';

let FBridge = {};
Object.assign(FBridge, components, tools);
export default FBridge;

// 检测微信外部依赖项
if (tools.env.platform == 'wx') {
    if (!window.wx) {
        document.write('<script src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>');
        document.write('<script src="//weixin.58.com/weixinjsconfig/config?t=' + Math.random()+'&debug=false"></script>');
    }
}
