id = prompt("아이디를 입력해주세요.아이디:Hello");
if (id === "Hello") {
  password = prompt("비밀번호를 입력해주세요.비밀번호:12");
  if (password === "12") {
    alert("로그인 성공하셨습니다.");
    location.href = "chat.html";
  } else {
    alert("비밀번호가 틀렸습니다.");
    location.href = "index.html";
  }
} else {
  alert("아이디가 틀렸습니다.");
  location.href = "index.html";
}
