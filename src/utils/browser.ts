const browser = {

  versions: function () {

    const u = navigator.userAgent

      // app = navigator.appVersion;

    return {

      trident: u.indexOf('Trident') > -1,                        /*IE内核*/

      presto: u.indexOf('Presto') > -1,          /*opera内核*/

      webKit: u.indexOf('AppleWebKit') > -1, /*苹果、谷歌内核*/

      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,        /*火狐内核*/

      mobile: !!u.match(/AppleWebKit.*Mobile.*/),        /*是否为移动终端*/

      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), /*ios终端*/

      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, /*android终端或者uc浏览器*/

      iPhone: u.indexOf('iPhone') > -1,          /*是否为iPhone或者QQHD浏览器*/

      iPad: u.indexOf('iPad') > -1,      /*是否iPad*/

      webApp: u.indexOf('Safari') == -1,          /*是否web应该程序，没有头部与底部*/

      souyue: u.indexOf('souyue') > -1,

      superapp: u.indexOf('superapp') > -1,

      weixin: u.toLowerCase().indexOf('micromessenger') > -1,

      Safari: u.indexOf('Safari') > -1

    };

  }(),

  language: navigator.language.toLowerCase()

};

// 作者：喜隋成疾
// 链接：https://www.jianshu.com/p/0180e3ee8108
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
export default browser