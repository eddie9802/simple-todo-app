import React, {Component} from 'react';


class InputToDo extends Component {

    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDoProps(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    name="title" 
                    type="text" 
                    className="input-text"
                    placeholder="Add todo..." 
                    value={this.props.title} 
                    name="title"
                    onChange={this.onChange}>
                </input>
                <input type="submit" value="Submit" className="input-submit"></input>
            </form>
        );
    }
}
export default InputToDo;
