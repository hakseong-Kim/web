<!--
1. helloworld.vue 파일을 아예 삭제를 하고, 그리고 app.vue 파일 내부에 있는 내용들을 모두 기본베이스(vbase)으로 만들어 준다
2. template 안에서 하나의 엘리먼트가 들어있어야한다. 즉, div가 하나만 들어가야 한다
3. 여태까지는 new vue안에 data만 넣어줘도됬는데, cil가 들어오게 되면서 컴포넌트 재사용의 기능 때문에 여러 개의  컴포넌트에서 같은 값을 사용하수도 있으므로,....
하단대로 함수형태로 만들어 줘야 한다.

4. 컴포넌트의 이름은 파스칼 케이스, 즉 앞 첫글자마다 대문자로 선언을 해주며, 2단어 이상으로 조합을 해줘여한다(vue의 자체 규정?)
=> 예를들어 컴포넌트를 호출할떄, 한글자 main으로 호출을 하게 되면 이게 컴포넌트인지, 아님 html태그인지 알 수 없게 된다.

5. vue 파일에 header를 지정하고 App.vue에서 컴포넌트로 호출을 해서 컴포넌트 호출한다음 template에서 데이터값을 가지고 온다.


-- webpack 에 대해서 어느정도의 이해가 필요하다.
-->

<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성이름(appHeader에 정의를 함) ="상위컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
  export default {
    data : function(){
      return {
        str : 'Header',
        name : '나의 사랑 한글날'

      }
    },
    components:{
      'app-header' : AppHeader

    },
    methods:{
      renewStr : function(){
        this.str = 'hi';

      }
      
    }
    
    
  }
</script>

<style lang="scss" scoped>

</style>