import React, { Component } from 'react';

class form extends Component {

    // This is a handy way of updating forms, given that state is named the same as
    // the name of an input field it will update them all at once. This saves you having
    // to write this function For each field, even though in this case these is only one.
    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Paste Long URL:
                        <br />
                        <input type="url" name="givenURL" onChange={this.props.updateState} value={this.props.givenURL} placeholder="URL.." />
                    </label>
                    <br />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default form;