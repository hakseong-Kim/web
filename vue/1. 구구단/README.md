## 구구단

#### 설명
-----
##### - A 곱하기 B는? 이라는 질문에서 정상적으로 답변하면 정답과 동시 문구가 바뀌며 다른문항으로 바뀜


#### 화면
-----

<div>
<img src ="https://user-images.githubusercontent.com/45492520/67928694-ff991c00-fbfe-11e9-94f7-4b16e98daf8c.png"></img>
</div>



#### 소스코드
-----

```{.http}
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<body>
    <div id="root">
        <div v-if>{{first}} 곱하기 {{second}}는?</div>
        <form v-on:submit="onSubmitForm">
                <input type="number" ref="answer" v-model="value"> 
                <button>입력</button>
        </form>
        <div id= "result"></div>
        <div>{{value}}</div>
        <div>{{result}}</div>
        <div>{{thrid}}</div>
        <div v-if="thrid == ''">시작!</div>
        <div v-else-if="thrid == '1'">값을 입력해주세요</div>
        <div v-else-if="thrid == '2'">입력한 값이 저번에 입력한 값보다 작아유</div>
        <div v-else-if="thrid == '3'">입력한 값이 저번에 입력한 값보다 커유</div>
    </div>

    <script>
        const app = new Vue({
            el : '#root', // <div id="root">을 바라봄
            data:{
                first: Math.ceil(Math.random()*9),
                second: Math.ceil(Math.random()*9),
                thrid : '',
                value: '',
                result: '',
            },
            methods:{
                onSubmitForm(e) {
                    e.preventDefault(); // 새로고침을 막기 위해 적용 form 은 버튼 클릭했을때 자동적으로 새로고침이 됨

                    if(this.first * this.second === parseInt(this.value)){
                        this.thrid = '1';
                    }
                    else if(this.first * this.second > parseInt(this.value)){
                        this.thrid = '2';
                    }

                    else if(this.first * this.second < parseInt(this.value)){
                        this.thrid = '3';
                    }

                    console.log(this.first, this.second, this.value);
                    if(this.first * this.second === parseInt(this.value)){
                        this.result = '정답';
                        this.first = Math.ceil(Math.random()*9);
                        this.second = Math.ceil(Math.random()*9);
                        this.value = '';
                        this.$refs.answer.focus();
                    }
                    else{
                        this.result = '땡';
                        this.value = '';
                        this.$refs.answer.focus();
                    }
                    
                }
            }
        })
    </script>
</body>
</head>
</html>
```
