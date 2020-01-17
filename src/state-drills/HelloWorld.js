import React, {Component} from 'react';

class HelloWorld extends Component {
    state = {
        who: 'world',
    };

    render() {
        return (
            <div className="HelloWorld">
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({who: "friend!"})}>Friend</button>
                <button onClick={() => this.setState({who: "React"})}>React</button>
                <button onClick={() => this.setState({who: "World"})}>World</button>
        </div>
        )
    }
}

export default HelloWorld;