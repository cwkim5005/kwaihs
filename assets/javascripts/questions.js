function getAnswer(i){
  if(quiz.answer.value == i){
    alert("정답입니다.");
    if(i == 12){ //문제 1번
      location.href="../scripts2/t1.html"
    }else if(i == 59372418){ //문제 2번
      location.href="../scripts2/t2.html"
    }else if(i == 13){ //문제 3번
      location.href="../scripts2/t3.html"
    }
    else if(i == 33){ //문제 4번
      location.href="../scripts2/t4.html"
    }
    else if(i == "나는 박사의 부활을 바란다"){ //문제 5번
      location.href="../scripts2/t5.html"
    }else if(i == "KA8J"){ //문제 6번
      location.href="../scripts2/t6.html"
    }
  }else{
    alert("틀렸습니다.")
  }
} 
