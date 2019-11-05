### part1 - 기본 문법 정리

##### 참고 자료
-----

###### - 공부한 사이트 w3schools.com - (https://www.w3schools.com/html/default.asp)


##### html 기본 문장 구조 방식
-----
- ###### <html><head><title><body>으로 진행되는 기본 문장 구조 방식이다

<img src ="https://user-images.githubusercontent.com/45492520/68174407-59179700-ffc1-11e9-9ba3-85385b9e6138.png" width=700></img>


##### html 제목
-----
- ###### 제목단은 h태그로 적용을 하며, `h1 ~ h6` 까지 적용이 가능하다

```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```

##### html 단락
-----
- ###### `p`태그로 이용해 단락 정의함

```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

##### html 링크
-----
- ###### `a`태그를 이용해 링크정의함

```
<a href="https://www.w3schools.com">This is a link</a>
```


##### html 버튼
-----
- ###### 뭐하는 놈인지는 다들 아실거고..

```
<button>Click me</button>
```


##### html 목록
-----
- ###### 목록은 `ul`(정렬되지 않은 / 글 머리 기호 목록) 또는 `ol`(순서 / 번호가 매겨진 목록) 태그와 `li` 태그 (목록 항목)로 정의함

```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```


##### html 이미지
-----
- ###### 이미지를 넣는 태그는 `img`태그로 정의가 되며 속성은 `src`으로 정의를 한다.
- ###### 너비와 높이의 속성을 두고 싶은 경우에는 `width`와 `height`속성을 적용을 한다.(자동적으로 픽셀로 적용이 됨)

```
<img src="img_girl.jpg" width="500" height="600">
```


##### html 스타일 속성
-----
- ###### `style` 속성은 색상, 글꼴, 크기 등과 같은 요소의 스타일을 지정하는데 사용이 됨
- ###### 중요한 요소이니 한번 쯤 봐주는게 좋음

```
<p style="color:red">This is a paragraph.</p>
```

##### html lang 속성
-----
- ###### 언어 속성을 적용하기 위해 사용, 접근성 응용프로그램 및 검색 엔진에 들어갈때 사용해주는 것 이 좋다.

```
<!DOCTYPE html>
<html lang="en-US">
<body>

...

</body>
</html>
```


##### 제목 속성
-----
- ###### 단락 위로 마우스를 가져 가면 title 속성 값이 툴팁으로 표시가 된다.

```
<p title="I'm a tooltip">
This is a paragraph.
</p>
```

##### 작은 따옴표 큰 따옴표
-----
- ###### 속성 값 주위에 큰 따옴표가 HTML에서 가장 일반적이지만, 작은 따옴표도 사용할 수 있다. 경우에 따라 속성 값 체에 큰 따옴표가 포함 된 경우 작은 따옴표도 사용해야한다

```
<p title='John "ShotGun" Nelson'> // 작은 따옴표 안에 큰 따옴표를 사용한 경우 
<p title="John 'ShotGun' Nelson"> // 반대로 큰 따옴표 안에 작은 따옴표를 사용한 경우
```



##### html 수평선
-----
- ###### 수평선을 넣어주고 싶을때에는 `hr`태그를 집어 넣어주면 된다

```
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
```












