
const search = document.getElementById("search-btn");
search.addEventListener('click', () => {
    console.log(1);
});

const mentee = document.getElementById("mentee");
mentee.addEventListener('click', () => {
    console.log(2);
});

const mentor = document.getElementById("mentor");
mentor.addEventListener('click', () => {
    console.log(3);
});

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