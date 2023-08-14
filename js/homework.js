const backBtn = document.getElementById("back-btn");
backBtn.addEventListener('click', () => {
    location.href = "http://127.0.0.1:8080/main.html"
});

const homework1 = document.getElementById("homework1");
const homework2 = document.getElementById("homework2");
const homework3 = document.getElementById("homework3");
const homework4 = document.getElementById("homework4");

const success = document.getElementById("success");
success.addEventListener('click', () => {
    localStorage.setItem("과제수정1", homework1.value);
    localStorage.setItem("과제수정2", homework2.value);
    localStorage.setItem("과제수정3", homework3.value);
    localStorage.setItem("과제수정4", homework4.value);
    location.href = "http://127.0.0.1:8080/main.html"
});

homework1.value = localStorage.getItem("과제1").trim();
homework2.value = localStorage.getItem("과제2").trim();
homework3.value = localStorage.getItem("과제3").trim();
homework4.value = localStorage.getItem("과제4").trim();
