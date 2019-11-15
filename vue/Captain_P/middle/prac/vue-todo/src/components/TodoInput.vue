<template>
  <!-- input 안에다가 입력을 하면 로컬 호스트로 저장을 하고,  -->
  <div class="inputBox shadow">
    <!-- v-model은 input 안에 입력된 내용들을 동적으로 바로바로 인스턴스 안에다가 맵핑을 하도록 하  -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <!-- <button v-on:click="ClearTodo">delete</button> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== "") {
        //   this.$emit('이벤트 이름', '인자1', '인자2' ....)
          this.$emit('addTodoItem', this.newTodoItem) 
          //addTodoItem 이라는 이벤트를 발생을 시키고 newTotoItem이라는 데이터값을 보낸다
          //
          this.clearInput();
      }
    },

    clearInput: function() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>