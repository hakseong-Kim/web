<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- ul>il*3 -> tab 기능이 마음이 드는구만 -->
      <!-- this.$store.state.todoItems 참고 -->
      <li
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{checkBtnCompleted : todoItem.completed}"
          v-on:click="toggleComplete(todoItem,index)"
        ></i>
        <span v-bind:class="{ textCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>

    <!-- {{this.var}} -->
  </div>
</template>

<script>
export default {
  //   props: ["propsdata"], 전역으로 쓰기때문에 사용하지 않음

  methods: {
    removeTodo(todoItem, index) {
      //   this.$emit("removeItem", todoItem, index);
      //   const obj = {
      //     todoItem,
      //     index
      //   };
      // this.$store.commit("removeOneItem", obj); // 이렇게 정석적으로 넣는게 가능하고,
      //ES6에 따라 obj을 선언하지 않고, {todoItem,index}으로 선언을 할 수 있다.

      console.log("obj : " + { todoItem, index });
      this.$store.commit("removeOneItem", { todoItem, index });
    },
    toggleComplete(todoItem, index) {
      //   const obj = {
      //     todoItem,
      //     index
      //   };
      //   this.$emit("toggleItem", todoItem, index);
      this.$store.commit("toggleChange", { todoItem, index });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none; /* 앞의 특수기호를 제거해줌 */
  padding-left: 0px; /* 해당 엘리먼트의 왼쪽 여백값을 지정을 함*/
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>