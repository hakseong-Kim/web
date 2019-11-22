<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearItems", // ? 헬퍼를 사용할떄 왜 인자값을 사용하지 않는가?
    }),

    // clearTodo() {
    //   console.log("clear1111");
    //   this.$store.commit("clearItems");
    //   // this.$emit('clearItem');
    // }
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>