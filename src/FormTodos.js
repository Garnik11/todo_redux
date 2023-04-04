import {useState} from 'react'
import { useDispatch} from 'react-redux';

export default function FormTodos(){
    const dispatch = useDispatch()

    const [text, settext] = useState("")

    function changeText(e){
        settext(e.target.value)
    }

    function createList(e){
        e.preventDefault()
        dispatch({type:"ADD_TODO", payload:text})
        settext("")
    }
    
    return(
        <form onSubmit={createList}>
            <input type = "text" value={text} onChange={changeText}  />
            <button>add text</button>
        </form>
    )

}