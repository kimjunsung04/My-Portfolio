/*유저 에이전트를 기반으로 브라우저 체크후 경고알림*/
var agent = navigator.userAgent.toLowerCase();

if((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
    alert("해당 브라우저는 일부기능이 동작하지않을수 있습니다.\n다른 브라우저 사용을 권장합니다.");
}