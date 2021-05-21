import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Post from './components/Post';
import './index.css'

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'Code a Todo App'},
            {id: 2, content: 'Read farooid'}
        ]
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        const todos = [...this.state.todos, todo];
        this.setState({ todos })
        // const setTodos = localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
    deleteTodo = id => {
        const todos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({ todos });
    }
    render() {
        return (
            // <BrowserRouter>
                <div>
                    {/* <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/:post_id' component={Post} /> */}
                        {/* <Route path='/abc' render={() => ( <h2>ABC</h2> )} /> */}
                    {/* </Switch> */}
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                    <AddTodo addTodo={this.addTodo} />
                </div>
            // </BrowserRouter>
        )
    }
}

export default App