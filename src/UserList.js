import React from 'react';

import axios from 'axios';

export default class UserList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <ul>
                {this.state.users.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}