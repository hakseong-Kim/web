<template>
<!-- input 안에다가 입력을 하면 로컬 호스트로 저장을 하고,  -->
    <div class="inputBox shadow ">
        <!-- v-model은 input 안에 입력된 내용들을 동적으로 바로바로 인스턴스 안에다가 맵핑을 하도록 하  -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class ="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>

        </span>
        <button v-on:click="ClearTodo"> delete </button>
    </div>
        

</template>

<script>
    export default {
        data : function(){
            return {
                newTodoItem: ''
            }
        },
        methods : {
            addTodo: function(){
                console.log(this.newTodoItem); // this는 해당 인스턴스 안에 들어가 있다고 보면됨
                // 저장하는 로직을 만들어 두면 될 것 같은데
                //localstorage.setItem(key,value);
                // 로컬스트리지는 개발자모드에서 application -> Local Storage 안에 있음
                localStorage.setItem(this.newTodoItem,this.newTodoItem);
                this.newTodoItem = '';
                this.clearInput(); // this 는 함수도 가리킬수있다고 한다                
                
                
            },
            ClearTodo: function(){
                localStorage.clear();
                console.log('삭제'); 

                
                
            },

            clearInput : function(){
                this.newTodoItem = '';

            }
        }
         
    }
</script>

<style scoped>
input:focus {
    outline : none;
}

.inputBox {
    background: white;
    height : 50px;
    line-height : 50px;
    border-radius: 5px;
}

.inputBox input { 
    border-style:none;
    font-size : 0.9rem;

}

.addContainer {
    float : right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display : block;
    width : 3rem;
    border-radius : 0 5px 5px 0;
}

.addBtn {
    color : white;
    vertical-align: middle;
}

</style>