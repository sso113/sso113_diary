window.addEventListener("message", function (event) {
  var diaryEntry = event.data;
  document.getElementById("atext").innerText = diaryEntry;

  // 일기 내용을 localStorage에 저장
  localStorage.setItem("icon", icon);
});
