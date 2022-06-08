import React, {useState, useEffect} from 'react';

import axios from 'axios';

function Users() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPosts(res.data.slice(0, 10));
            console.log(posts);
        })
    });

    return (
        <ul>
            {this.state.users.map(person => <li>{person.name}</li>)}
        </ul>
    )
}

export default Users