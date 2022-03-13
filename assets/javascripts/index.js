var progress_bar = 0
function getAnswer(){
  if(password.answer.value == "문제 1번"){
    location.href="scripts1/h1.html"
  }else if (password.answer.value == "문제 2번") {
    location.href="scripts1/h2.html"
  }else if (password.answer.value == "문제 3번") {
    location.href="scripts1/h3.html"
  }else if (password.answer.value == "문제 4번") {
    location.href="scripts1/h4.html"
  }else if (password.answer.value == "문제 5번") {
    location.href="scripts1/h5.html"
  }else if (password.answer.value == "문제 6번") {
    location.href="scripts1/h6.html"
  }else if (password.answer.value == "문제 7번") {
    location.href="scripts1/h7.html"
  }else{
    alert("비밀번호가 틀렸습니다.")
  }
}
function progress() {
  document.getElementById('pb').value = '20';
} 
