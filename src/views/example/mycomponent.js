import React from "react";
class MyComponent extends React.Component {
    state = {
        fullName: "Hoàng Văn Sơn",
        age: 20,
        address: "Hải Dương",
        phone: "0876162678",
        status: "Độc thân"
    }
    handleChangeInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
            <div>
                <input name="fullName" value={this.state.fullName} type="text"
                onChange={(event) => {
                    this.handleChangeInput(event)
                }}
                />
            </div>
            <div>
                <input name="age" value={this.state.age} type="text"
                onChange={(event) => {
                    this.handleChangeInput(event)
                }}
                />
            </div>
            <div>
                <h1>Hello, My name is {this.state.fullName}, I am {this.state.age}</h1>
            </div>
            </>

        );
    }
}
export default MyComponent;