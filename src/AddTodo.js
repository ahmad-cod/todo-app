import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Todo: </label>
                    <input type='text' placeholder='add todo ..' onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}
export default AddTodo