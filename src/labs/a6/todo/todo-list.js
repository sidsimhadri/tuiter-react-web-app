import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
         <ul>
       {
         todos.map((todo, index) => {
           return (<TodoItem index={index} todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;
//<li key={todo.title}></li>