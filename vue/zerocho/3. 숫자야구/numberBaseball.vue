<!-- 좀 특수한 문법을 쓰는 자바스크립트라 보면 됨, 결론은 뭐 자바스크립트라 생각해도 되긴 함-->

<template>
  <div>
    <h1>{{result}}</h1>
    <form v-on:submit="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
      <buttom>입력</buttom>
    </form>
    <div>시도: {{}}</div>
  </div>

  
</template>

<script>
export default {
  data() {
      return{
          value: '',
          result: '',
      }


  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
    }
  }
};
</script>

<style>
</style>
