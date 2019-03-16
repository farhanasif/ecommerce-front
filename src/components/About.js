import React, { Component } from 'react';
import auth from './auth';

class About extends Component {

    componentDidMount = () => {
        console.log(this.props);
    }
    
    render() {
        return (
        <div>
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit et dui quis dapibus. Pellentesque leo eros, consequat et risus et, facilisis lobortis nunc. Integer ipsum quam, ultricies et sollicitudin ac, sagittis id justo. Fusce euismod ultrices varius. Donec ornare mollis venenatis. </p>
            <button onClick={
                () => {
                    auth.logout(() => {
                        this.props.history.push('/')
                    }) 
                }
            }>logout</button>
        </div>
        );
    }
}

export default About;