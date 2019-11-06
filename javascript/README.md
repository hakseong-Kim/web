### part1 - 기본 문법 정리

##### 참고 자료
-----

###### - 공부한 사이트 w3schools.com - (https://www.w3schools.com/html/default.asp)


##### javascript 기본 문법
-----
- ###### javascript는 css와 동일하게 `script` 문으로 작성을 한다. 

```
<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript</h1>

<p>JavaScript can change the content of an HTML element:</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<p id="demo">This is a demonstration.</p>

<script>
function myFunction() { 
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>

</body>
</html>

```

- ###### 이렇게 html 스타일도 변경이 가능하다

```
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";
```

- ###### 이렇게 스크립트문의 변수값에 데이터를 집어넣은 다음 적용이 가능하다,

```
<!DOCTYPE html>
<html>
<body>
<script>
function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "pic_bulboff.gif"
  } else {
    pic = "pic_bulbon.gif"
  }
  document.getElementById('myImage').src = pic; // 변수값 pic 에 파일명을 집어넣어주자
}
</script>

<img id="myImage" src="pic_bulboff.gif" width="100" height="180">

<p>
<button type="button" onclick="light(1)">Light On</button>
<button type="button" onclick="light(0)">Light Off</button>
</p>

</body>
</html>
```














