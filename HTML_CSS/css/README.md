### CSS - 기본 문법 정리

##### 참고 자료
-----

###### - 공부한 사이트 w3schools.com - (https://www.w3schools.com/html/default.asp)


##### 내부 css 
-----
- ###### 기본적으로 보여지는 내부 css 기본 요소이다. 

```
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```


##### 외부 css
-----
- ###### 파일이든 어디 링크든 외부 CSS가져온다면 이렇게 적용하면 된다

```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css"> // 이걸해도 되고,
  <link rel="stylesheet" href="https://www.w3schools.com/html/styles.css"> // 이걸해도 되고,
  <link rel="stylesheet" href="/html/styles.css"> // 이걸해도 됨,
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
- ###### 외부 스타일 시트는 모든 텍스트 편집기에서 사용할 수 있으며, 파일에는 html 코드가 들어있지않은 .css으로 정리가 되야한다.

```
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```


##### 글꼴 및 테두리 및 여백 설정
-----

- ###### `color` 속성은 텍스트 색상을 정의, `font-family`은 글꼴을 정의, `font-size` 은 텍스트 크기를 정의함

```
<style>
h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
p  {
  color: red;
  font-family: courier;
  font-size: 160%;
}
</style>
```

- ###### `border` 속성은 html 요소 주위에 테두리를 지정한다

```
p {
  border: 1px solid powderblue;
}
```

- ###### `padding` 속성은 텍스트와 테두리 사이에 공백을 정의한다. 

```
p {
  border: 1px solid powderblue;
  padding: 30px;
}
```

- ###### `margin` 테두리 주위에 공백을 지정한다

```
p {
  border: 1px solid powderblue;
  margin: 50px;
}
```


##### id 속성
-----

- ###### `id`의 특수요소에 특정 스타일을 추가시킬 경우 사용한다(css 에 #을 붙이면 되는 듯)
```
 - html에 적용
<p id="p01">I am different</p>
```


```
 - css에 적용
#p01 {
  color: blue;
}
```

##### class 속성
-----

- ###### `class`의 특수요소에 특정 스타일을 추가시킬 경우 사용한다(태그명.클래스명으로 지정)
```
 - html에 적용
<p class="error">I am different</p>
```


```
 - css에 적용
p.error {
  color: red;
}
```

ㅊㅊ




