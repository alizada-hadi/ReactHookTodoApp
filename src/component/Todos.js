import React, {useState, useReducer} from 'react'
import ModalContainer from '../containers/Modal'
import TableContainer from '../containers/Table'

const reducer = (state, action) => {
    if(action.type === "ADD_ITEM"){
        const newItem = [...state.todos, action.payload]
        return {
            ...state, 
            todos : newItem,
            isModalOpen : true, 
            modalContent : "Item added successfully"
        }
    }
    
    if(action.type === "NULL_VALUE"){
        return {...state, isModalOpen:true, modalContent:"Please fill the input box "}
    }

    if(action.type === "CLOSE_MODAL"){
        return {...state, isModalOpen:false}
    }

    const newItems = [...state.todos].filter(t => t.id !== action.payload)
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state, 
            todos : newItems,
            isModalOpen : true, 
            modalContent: "Item deleted successfully"
        }
    }

    


    console.log(state);
}

const defaultState = {
    todos : [],
    isModalOpen: false,
    modalContent : ""
}


const Todos = () => {
    const [todo, setTodo] = useState("")
    const [state, dispatch] = useReducer(reducer, defaultState)
    const handleSubmit = e => {
        e.preventDefault()
        if(todo){
            dispatch({type : "ADD_ITEM", payload : {id : new Date().getTime().toString(), todo}})
            setTodo("")
        }else{
            dispatch({type : "NULL_VALUE"})
        }
    }

    const closeModal = () => {
    dispatch({
        type : "CLOSE_MODAL"
    })
}


    return <>
        {state.isModalOpen && <ModalContainer modalContent={state.modalContent} closeModal={closeModal} />}
        <div className="col-lg-5 m-auto mb-4">
            <form className="mt-2" action="" onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className=" mt-2 btn btn-outline-info" type="submit">Add Item</button>
            </form>
        <h4 className="mt-4">Todo List</h4>
        <hr />
        <TableContainer className="table">
            {state.todos.length === 0 ? <p className="alert alert-warning text-center">There is no todo item left.</p> : state.todos.map(t => {
                return <tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.todo}</td>
                    <td>
                        <button onClick={() => dispatch({type : "REMOVE_ITEM", payload : t.id})} className="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
            })}
        </TableContainer>
        </div>
    </>
}

export default Todos