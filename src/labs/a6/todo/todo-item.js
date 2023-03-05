
const TodoItem = (todo, index) => {
  return (
    <li key={index}>
     <input type="checkbox"
            defaultChecked={todo.done}/>
     {todo.title}
     ({todo.status})
   </li>
 );
}
export default TodoItem;