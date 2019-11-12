<template>
<!--
배운 내용 정리

 - Reactivity
 - 인스턴스
 - 컴포넌트
 - 컴포넌트 통신{
   props
   event emit
 }

  - http 통신 라이브러리(axios)
  - 템플릿 문법{
    - 데이터 바인딩
    - 뷰 디렉티브
  }
  - vue cli
  - 싱글파일 컴포넌트 

-->
  <div v-on:submit.prevent="submitForm">
    <form action="">
      <div>
        <label for="username">id : </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">password : </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';





// 컴퍼넌트 화로 개발을 했을 경우 행여나 시
  export default {
    data : function(){
      return{
        username : '',
        password : '',
      }
    },
    methods:{
      submitForm : function(event){
        //event.preventDefault();
        console.log(this.username, this.password);
        var url = 'https://jsonplaceholder.typicode.com/users';
        var data ={
          username : this.username,
          password : this.password
        };
        axios.post(url, data )// 데이터를 생성하거 나 조작할때 사용하는 http 프로토콜
        .then(function(response){
          console.log(response);
          
        })
        .catch(function(error){
          console.log(error);
          
        })
         

        
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>


