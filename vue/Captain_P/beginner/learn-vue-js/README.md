### part1 - 기본 문법 정리

##### 참고 자료 - 아직 소스코드의 이미지 작업을 하지 않은 상태임
-----

###### - 인프런 캡틴판교 강의 - 초급자용 Vue.js (https://www.inflearn.com/course/Age-of-Vuejs#)
###### - Vue.js 공식 문서 (https://kr.vuejs.org/v2/guide/index.html)
###### - Vue.js 스타일 가이드 (https://kr.vuejs.org/v2/style-guide/index.html)
###### - Vue.js Cookbook (https://kr.vuejs.org/v2/cookbook/index.html) - 현재 번역 작업 중이신 듯
###### - Vuex 공식 문서 (https://vuex.vuejs.org/kr/)
###### - VueRouter 공식 문서 (https://router.vuejs.org/kr/)
###### - Vue Cli 공식 문서 (https://cli.vuejs.org/) - 여기는 영어임

##### 참고 자료 - vscode의 설치를 하면 좋은 프로그램
-----



##### 뷰 인스턴스 및 각 기본 속성 들
-----
- ###### 뷰를 개발할때 필수로 생성을 해야하는 코드이며, vue의 root 속성으로 만들어 진다, 단 인스턴스는 여러개를 만들 수 있다

```
var vm = new Vue({
  // 옵션
})
```


- ###### 인스턴스에서 사용할 수 있는 속성과 api 는 다음과 같이 이루어져 있다

```
new Vue({
  el: , // 인스턴스가 그려지는 화면의 시작 점
  template: , // 화면에 표시할 요소(html, css등)
  data: , // 뷰의 반응성(Reactivity)가 반영된 데이터 속성
  methods: , // 화면의 동작과 이벤트 로직을 제어하는 메서드
  created: , // 뷰의 리이프 사이클과 관련된 속성
  watch: , // data 에서 정의한 속성이 변화했을 때, 추가 동작을 수행할 수 있게 정의하는 속성 -> 데이터가 변하면 구동하는 속성
  computed: , // 계속적인 연산작업을 위해 사용하는 속성
});
```


- ###### 속성 예시

```
예시) - el
    <script>
    new Vue({
        el : '#app', // body 태그안에서 app의 시작점과 연결을 함
    });
    </script>
    
    
예시) - data
    <script>
    new Vue({
        data: {
                num: 10, // 데이터 변수값 지정
              },
    });
    </script>
    
예시) - template
    <script>
    new Vue({
            components: {
                'app-footer': {
                    template: '<footer>footer</footer>' // 마크업 태그를 넣기 위해 만듬, 재사용성을 기반으로 하는 턴포넌트 기반과 함꼐 만드는게 좋음
                }
            }},
    });
    </script>
    
예시) - methods // 여기에 나오는 this.num는 인스턴스 내부에 선언된 num이라 보면됨
    <script>
    new Vue({
        data : {
            num : 0,
        },
        methods:{
            deliverNum: function(value){
                this.num = value; 
            }
        }
    });
    </script>
    
예시) - watch
    <script>
    new Vue({
            watch : { 
                num : function(newValue, oldValue){
                    this.fetchUserByNumber(newValue); //1. 데이터의 변화가 발생했을떄, 함수발생
                }

            },
    });
    </script>
    
예시) - methods // 안녕하세요를 거꾸로 요세하녕안으로 출력되게끔 하는 것
    <script>
    new Vue({
        data: {
           message: '안녕하세요'
         },
        computed: {
         // 계산된 getter
                 reversedMessage: function () {
                 // `this` 는 vm 인스턴스를 가리킵니다.
                 return this.message.split('').reverse().join('')
              }
          }
    });
    </script>
   **** 참고 -  watch 속성은 감시할 데이터를 지정하고 그 데이터가 바뀌면 이런 함수를 실행하라는 방식으로 소프트웨어 공학에서 이야기하는 ‘명령형 프로그래밍’ 방식. computed 속성은 계산해야 하는 목표 데이터를 정의하는 방식으로 소프트웨어 공학에서 이야기하는 ‘선언형 프로그래밍’ 방식. 이라 볼 수 있음
   

```


##### 컴포넌트
-----
- ###### 화면의 영역을 구분하여 개발하는 뷰의 기능으로서, 코드의 재사용성이 높은 장점을 가지고 있다.

```
<body>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <div id="app">
        <app-header></app-header>
        <app-footer></app-footer>
        <!-- 인스턴스 app 안에 app-header라는 컴포넌트가 생생성이 된다-->
    </div>

    <div id="app2">
            <app-header></app-header>
            <app-footer></app-footer>
    <!-- app-footer 은 지역컴포넌트라서 뜨지 않게되고, 해당 문구는 오류가 발생을 한다.-->

    </div>


    <script>
        //Vue.component('컴포넌트 이름', 컴포넌트 내용);
        //전역 컴포넌트 - 플러그인이나 라이브러리 형태로 전역으로 만들대를 주로 구현을 함
        Vue.component('app-header', {
            template: '<h1>Header</h1>'
        });


        // 지역 컴포넌트 지역방법 - 실제 프로젝트에서 가장 많이 사용하는 방법
        // 싱글페이지 같은 걸 만들때에 적용하기 위해서 만들었다고 보면 됨
        new Vue({
            el: '#app', // 인스턴스를 생성을 하면 기본적으로 root component으로 인식
            //    components :{
            //            '컴포넌트 이름': '컴포넌트 내용' // 전역 컴포넌트와 형식이 같다고 보면됨
            //        }
            // 잡다한 팁 - 커맨드 + / 은 주석처리다
            // components에서의 s는 여러개가 들어가는 속성들이라 s가 붙는다고 함  
            components: {
                'app-footer': {
                    template: '<footer>footer</footer>'
                }
            }
        });

        // 인스턴스는 여려개를 만들 수 있다
    new Vue({
        el : '#app2' // 인스턴스를 생성을 하면 기본적으로 root component으로 인식
    });
    </script>
</body>
```













