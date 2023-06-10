function FacebookUtils() {
    downloadapk();
    var timestamp = Math.round(new Date() / 1000)
    var url = "https://graph.facebook.com/v16.0/529438395708857/events?access_token=EAARoDZB5fuVMBABnn7f00WqZCuH2djF0VehLYkA7aCPv6OTaMMDvfiMm4hgJikTYNXJnNnpaIQVJRlZBTkSh0TvTwoF0VviTHx6fAZC64Nel9aV7I3ZBb1EI8RQirUe7qQFViQIgih8WavsYR6jUxaCIZBrEqsbnoQuuLmp6ZAyir00Q78BgBys";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    //var sendData = {"event_name":"ClickEvent","event_time":timestamp,"event_source_url":"https://www.vn123.vip/","event_id":"vn123_ClickEvent"};
    var sendData = {
        "data": [{
            "event_name": "ClickEvent",
            "event_time": timestamp,
            "event_source_url": "https://www.vn123.vip/",
            "event_id": "event_id_vn123",
            "user_data": {
                "em": "309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd"
            }
        }]
    };
    //将用户输入值序列化成字符串
    xhr.send(JSON.stringify(sendData));
    //回调
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            //根据服务器的响应内容格式处理响应结果
            if (xhr.getResponseHeader('content-type') === 'application/json') {
                var result = JSON.parse(xhr.responseText);
                //根据返回结果判断验证码是否正确
                if (result.events_received != 1) {
                    alert('失败');
                }
            } else {
                console.log(xhr.responseText);
            }
        }
    }
}

function downloadapk() {
    var url1 = "https://app.adjust.com/th9uk1z?campaign=" + $("#p1").val() + "%20%28" + $("#p2").val() + "%29&adgroup=" + $("#p3").val() + "%20%28" + $("#p4").val() + "%29&creative=" + $("#p5").val() + "%20%28" + $("#p6").val() +
        "%29&redirect=https%3A%2F%2Fwww.vn123.vip%2Fd%2Fvn123vip.apk&fbclid=" + $("#fbclid").val() + "&fbpid=" + getCookie("_fbp") + "";
    var url = "https://app.adjust.com/f38gckl?gclid=" + $("#gclid").val() + "&gbraid=" + $("#gbraid").val() + "&wbraid=" + $("#wbraid").val() + "&redirect=https%3A%2F%2Fwww.vn123.fun%2Fd%2Fvn123fun.apk";
    window.location.href = url;
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
}