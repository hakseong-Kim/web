const storage = {
    fetch() { 
        const arr = [];
            if (localStorage.length > 0) {
              for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                  arr.push(
                    JSON.parse(localStorage.getItem(localStorage.key(i)))
                  );
                }
            }
        }
        return arr;
    },
};


const state = { 
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state){ 
        return state.todoItems;
    }
};

const mutations = { // 객체의 안이기 때문에, 컴마를 넣어야 한다
    addOneItem(state, todoItem){
        const obj = {
        completed: false,
        item: todoItem
        };

      console.log(todoItem); // this는 해당 인스턴스 안에 들어가 있다고 보면됨
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    
     },

     clearItems(state){
        console.log("clear");
        alert("hi");
        //this.todoItems.splice(0,this.todoItems.length);
        state.todoItems = [];
        localStorage.clear();
      },
      


     removeOneItem(state,obj){
        localStorage.removeItem(obj.todoItem.item);
        state.todoItems.splice(obj.index,1);
        console.log('obj : ' + state);
        console.log('obj.index : ' + obj.index);
        console.log('obj.todoItem.item : ' + obj.todoItem.item);
        console.log('obj.todoItem : ' + obj.todoItem);
      },
      

     toggleChange(state, obj){
        // todoItem.completed = !todoItem.completed;
        state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed;
  
        //로컬 스토러지에 업데이트를 하는 그런게 없다, 그래서 데이터를 삭제를 하고 추가를 시켜야한다
        localStorage.removeItem(obj.todoItem.item); // 삭제를 먼저 하고

        localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem)); // 그 다음에 값을 추가를 시키는 것으로 하자
      } 
};

export default{
    state,
    getters,
    mutations
}
