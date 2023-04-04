import { useDispatch, useSelector } from 'react-redux';


export default function ListTodos(){

    const data = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    function delTodo(id){
        dispatch({type:"DELETE_TODO", id})
    }

    
    return(
        <div>
            {data.map((todo)=>{
                return(
                    <div id={todo.id}>
                        <p>{todo.text}</p>
                        <button onClick={() => delTodo(todo.id)} >x</button>
                    </div>
                )
            })}
        </div>
    )
}