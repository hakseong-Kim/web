import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

// 게층 구조
//  <Root> 3층 
// <app> 2층
// <TodoHeader> , <TodoInput> , <TodoList> , <TodoFooter> 1층
// root 안에 app 이 종속, app 안에 하위 4개의 인스턴스들로 계층을 구성하고 있다. 보면 됨




