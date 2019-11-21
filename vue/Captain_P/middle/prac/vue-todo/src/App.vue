<template>
  <div id="app">
    <TodoHeader></TodoHeader>

    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind: 내려 보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList
      v-bind:propsdata="todoItems"
    ></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

// 여기는 그럼 root 가 있는 쪽이라 봐야하는게 맞겠지

//리펙토링 : 각 컴포넌트의 vue 파일에서 동작하던 애들을 하나둘씩 App.vue 파일에서 작동이 되도록 설정을 함

export default {
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = {
    //     completed: false,
    //     item: todoItem
    //   };

    //   console.log(todoItem); // this는 해당 인스턴스 안에 들어가 있다고 보면됨
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // clearItems() {
    //   console.log("clear");
    //   alert("hi");
    //   //this.todoItems.splice(0,this.todoItems.length);
    //   this.todoItems = [];
    //   localStorage.clear();
    // },

    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },

    // toggleChange(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed;

    //   //로컬 스토러지에 업데이트를 하는 그런게 없다, 그래서 데이터를 삭제를 하고 추가를 시켜야한다
    //   localStorage.removeItem(todoItem.item); // 삭제를 먼저 하고
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); // 그 다음에 값을 추가를 시키는 것으로 하자
    // }
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>