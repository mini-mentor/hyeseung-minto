const REST_API_KEY = "d2b7a4c136d454a2bc445aa50f1337c0"
const kakaoLoginUrl = "https://kauth.kakao.com/oauth/authorize";
const kakaoTokenApiUrl = "https://kauth.kakao.com/oauth/token";
const redirectUrl = "http://127.0.0.1:8080/main.html";

// 1. 카카오 로그인 창으로 이동
function moveKakaoLogin() {
    location.href = `${kakaoLoginUrl}?client_id=${REST_API_KEY}&redirect_uri=${redirectUrl}&response_type=code`
}