import React from "react";
import ChildComponent from "./childcomponent.js";
class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        arrJob: [
            { id: '1', title: 'Developer', salary: '500' },
            { id: '2', title: 'Tester', salary: '400' },
            { id: '3', title: 'Project Manager', salary: '1000'}
        ],
    }
    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }
    handleChangeLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        console.log(this.state);
        return (
            <>
            <form>
                <label htmlFor = "fname">First name:</label><br/>
                <input type = "text" value={this.state.firstName}
                onChange={(event) =>this.handleChangeFirstName(event)}
                /><br/>
                <label htmlFor = "lname">Last name:</label><br/>
                <input type = "text" value={this.state.lastName}
                onChange={(event) => this.handleChangeLastName(event)}/><br/><br/>
                <input type = "submit" value = "Submit" onClick={(event) => this.handleSubmit(event)}/>
            </form>
            <ChildComponent 
            name = {'Son'}
            age = {'20'}
            arrayJob = {this.state.arrJob}
          />

            </>

        );
    }
}
export default MyComponent;