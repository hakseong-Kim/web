import Vue from 'vue'
import Vuex from 'vuex'


//* 그렇다면은 가장 우선시로 발동하는게 글로벌로 먼저 진행을 하고, 지역을 그 다음으로 선언을 하는건가? 아니면 글로벌에서 지역을 호출하는건가?  */




// use은 vue 의 글로벌 함수를 사용하고 싶을떄 사용을 함
//store을 외부에서 사용하려면 main.js에서 명시하면서 선언을 해줘야한다.
Vue.use(Vuex);

//전역함수로 사용이 가능하지만, 지역으로 구성되어있는 vue의 api들을 공통 함수로 빼기 위한 소스
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
// mutations은 일반 vue의 methods와 같다고 보면 됨, state는 data와 같다고 보면 된다 
export const store = new Vuex.Store({
    // main.js 에다가 명시를 해 놓아야함 연산에서  
    state : { 
        todoItems: storage.fetch()

    }, 
    mutations: {
        //속성 데이터를 받을 때, 속성 인자값이 하나만 들어가야함, 그래서 오브젝트형식으로 변수를 하나만들어서 집어넣는걸로
        addOneItem(state, todoItem) {
        const obj = {
            completed: false,
            item: todoItem
          };
    
          console.log(todoItem); // this는 해당 인스턴스 안에 들어가 있다고 보면됨
          localStorage.setItem(todoItem, JSON.stringify(obj));
          state.todoItems.push(obj);
        
         },

         clearItems(state) {
            console.log("clear");
            alert("hi");
            //this.todoItems.splice(0,this.todoItems.length);
            state.todoItems = [];
            localStorage.clear();
          },


          removeOneItem(state,obj) {
            localStorage.removeItem(obj.todoItem.item);
            state.todoItems.splice(obj.index,1);
            console.log('obj : ' + state);
            console.log('obj.index : ' + obj.index);
            console.log('obj.todoItem.item : ' + obj.todoItem.item);
            console.log('obj.todoItem : ' + obj.todoItem);
          },
          

          toggleChange(state, obj) {
            // todoItem.completed = !todoItem.completed;
            state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed;
      
            //로컬 스토러지에 업데이트를 하는 그런게 없다, 그래서 데이터를 삭제를 하고 추가를 시켜야한다
            localStorage.removeItem(obj.todoItem.item); // 삭제를 먼저 하고
    
            localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem)); // 그 다음에 값을 추가를 시키는 것으로 하자
          }
          

    }
}) 

