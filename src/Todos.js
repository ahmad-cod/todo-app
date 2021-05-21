import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return  <li className='' key={todo.id}>{todo.content} <button className='btn red' onClick={() => deleteTodo(todo.id)}>Delete</button></li>
        })
    ) : ( <p>You have no todos </p> )
    return (
        <div className='container'>
            <h4>Todos:</h4>
            <ol className=''>{todoList}</ol>
        </div>            
    )
}
export default Todos