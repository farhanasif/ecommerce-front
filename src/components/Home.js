import React, { Component } from 'react';
import auth from './auth';

class Home extends Component {
    render() {
        return (
        <div>
            <h4>Home</h4>
            <p>Nulla ac finibus quam. Duis ac velit eu lorem dignissim eleifend. Nullam sit amet massa lectus. Morbi rutrum lorem ipsum, ac auctor elit semper ut. Nulla porta odio et nisi interdum euismod. Proin consectetur eros ut elit varius, eget venenatis est tincidunt. Vivamus et tellus odio.</p>
            <button onClick={
                () => {
                    auth.login(() => {
                        this.props.history.push("/about")
                    })
                }
            }>login</button>
        </div>
        );
    }
}

export default Home;