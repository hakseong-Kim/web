<template>
  <!-- input 안에다가 입력을 하면 로컬 호스트로 저장을 하고,  -->
  <div class="inputBox shadow">
    <!-- v-model은 input 안에 입력된 내용들을 동적으로 바로바로 인스턴스 안에다가 맵핑을 하도록 하  -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <!-- <button v-on:click="ClearTodo">delete</button> -->

    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <!-- 첫 등장하는 슬롯, 특정 컴포넌트의 일부 UI를 재사용할 수 있다는 장점을 가지고 있다, -->
      <!-- 여기서 말하는 모델이 파일을 가져오는 그 모델인가? -> 컴포넌트화를 시켜서 가지고 오는 것 같은데-->
      <h3 slot="header">경고!</h3>
      <h3 slot="body">무언가를 입력하세요</h3>
      <div slot="footer">
        <h3>입력안하면 엉덩이에 불난다옹</h3>
        <i class="fas fa-times closeModelBtn" @click="showModal = false"></i>
        <!-- @click == v-on:click -->
        <!-- <button class="modal-default-button" v-on:click="addTodo"></button> -->
      </div>
    </Modal>

    <Modal v-if="showModalError" @close="showModalError = false">
      <h3 slot="header">경고!</h3>
      <h3 slot="body">같은 문구를 입력하시면 안됩니다</h3>
      <div slot="footer">
        <h3>입력된 것 보다 다른문구를 입력해주세요</h3>
        <i class="fas fa-times closeModelBtn" @click="showModalError = false"></i>
      </div>
    </Modal>
  </div>

  <!-- vue에서 지향하는 바는 root 컴포넌트 안에 만들어 주는 html태그 하나만 만들어 주는게 좋다 -->
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
      showModalError: false,
      data: ""
    };
  },
  methods: {
    addTodo() {
      this.data = localStorage.getItem(this.newTodoItem);
      console.log(this.data);
      if (this.newTodoItem !== "") {
        if (this.data !== null) {
          this.showModalError = !this.showModalError;
        } else {
          //   this.$emit('이벤트 이름', '인자1', '인자2' ....)
          this.$emit("addTodoItem", this.newTodoItem);
          //addTodoItem 이라는 이벤트를 발생을 시키고 newTotoItem이라는 데이터값을 보낸다
          //
          this.clearInput();
        }
      } else {
        this.showModal = !this.showModal;
      }
    },

    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    // input 하위에 있는 컴포넌트 model 을 추가한다
    Modal,
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

.modal-default-button {
  float: right;
}

.closeModelBtn {
  color: #42b983;
}
</style>
