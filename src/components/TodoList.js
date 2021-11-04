import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map((todo,key) => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
}

export default TodoList
