### part1 - 기본 문법 정리

##### 참고 자료
-----

###### - 공부한 사이트 w3schools.com - (https://www.w3schools.com/html/default.asp)


##### javascript 기본 문법
-----
- ###### javascript는 css와 동일하게 `script` 문으로 작성을 한다

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













