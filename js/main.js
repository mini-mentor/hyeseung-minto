
const search = document.getElementById("search-btn");
search.addEventListener('click', () => {
    console.log(1);
});

const mentee = document.getElementById("mentee");
mentee.addEventListener('click', () => {
    location.href = "http://127.0.0.1:8080/mentee.html"
});

const mentor = document.getElementById("mentor");
mentor.addEventListener('click', () => {
    console.log(3);
});

// 현재 날짜 가져오기
var currentDate = new Date();

// 일주일 후 날짜 계산
var oneWeekLater = new Date(currentDate);
oneWeekLater.setDate(currentDate.getDate() + 7);

// 요일 이름 배열
var daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

// week-clock 요소 업데이트
var weekClockElement = document.querySelector('.week-clock');
weekClockElement.textContent = currentDate.getHours() + ':' + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();

// week-date 요소 업데이트 (날짜와 요일 추가)
var weekDateElement = document.querySelector('.week-date');
var year = oneWeekLater.getFullYear();
var month = (oneWeekLater.getMonth() + 1 < 10 ? '0' : '') + (oneWeekLater.getMonth() + 1);
var day = (oneWeekLater.getDate() < 10 ? '0' : '') + oneWeekLater.getDate();
var dayOfWeek = daysOfWeek[oneWeekLater.getDay()]; // 요일 계산
weekDateElement.textContent = year + '.' + month + '.' + day + ' (' + dayOfWeek + ')';



const REST_API_KEY = "d2b7a4c136d454a2bc445aa50f1337c0"
const kakaoTokenApiUrl = "https://kauth.kakao.com/oauth/token";
const redirectUrl = "http://127.0.0.1:8080/main.html";

// 2. 토큰 받기
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
        console.log(code);
        console.log(getKakaoToken(code));
    }
});

function getKakaoToken(code) {
    let token = "";
    let data = {
        "grant_type": "authorization_code",
        "client_id": REST_API_KEY,
        "redirect_uri": redirectUrl,
        "code": code,
    };

    $.ajax(kakaoTokenApiUrl, {
        data: data,
        dataType: "json",
        method: "POST",
        async: false,
        success: function (resultData) {
            token = resultData.access_token;
        }});

    return token;
}