/*

    URL 다루기

*/
var url1 = "http://www.mysite.com/user?name=둘리&no=10";

//1. escape: URL 전부 encoding(x) deprecated
var url2 = escape(url1);
console.log(url2);

//2. encodeURI : parameter 만 encoding(o)
var url3 = encodeURI(url1);
console.log(url3);

//3. encodeURIComponent: 값만 엔코딩 해야하는 경우
var url4 = encodeURIComponent(url1); // 안 좋은 사용 예
console.log(url4);

//만들어야할 URL
//http://mysite.com/user?no=10&name=둘리&email=dooly@gmail.com
var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop+"="+encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}
var url="http://mysite.com/user"
var params = {
    name:'둘리',
    no:10,
    email:"dooly@gmail.com"
}
var url5 = url+"?"+toQueryString(params);
console.log(url5)
/*
$.ajax({
    url:'post';,
    type : "application/json;",
    contnentType : "application/json"
})
*/