import React from "react";


class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.setState({age: this.state.age + 1})}>Birthday Button for {this.props.firstName}</button>
                <hr />
            </div>
        );
    }
}

export default PersonCard;