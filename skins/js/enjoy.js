//Event snippet for payment conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
function gtag_report_conversion(url) {
    var callback = function() {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-10799714543/xNCXCMPe7ZQYEO-h2p0o',
        'event_callback': callback
    });
    return false;
}
//获取url中参数方法
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
//下载
function enjoydownloadapk() {
    var appId = 'qh-h5-gg'
    var baseUrl = `https://apk-api.enjoy.link/v2/download/redirect/${appId}`
    var adid = getQueryVariable("adid") || "",
        gclid = getQueryVariable("gclid") || "",
        gbraid = getQueryVariable("gbraid") || "",
        wbraid = getQueryVariable("wbraid") || ""
    var downloadUrl = `${baseUrl}?adid=${adid}&gclid=${gclid}&gbraid=${gbraid}&wbraid=${wbraid}`
    gtag_report_conversion(downloadUrl);
}