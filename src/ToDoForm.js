import React, {Component} from 'react'

class ToDoForm extends Component {
    constructor(){
        super()
        this.state = { content: "" }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            content: ""
        })
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input name="content" value={this.state.content} onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }


}

export default ToDoForm