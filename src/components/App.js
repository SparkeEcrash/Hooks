import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  //useState('posts') returns an array of two items
  const [resource, setResource] = useState('posts');
  //const resource gets assigned to the first item and is the value of state
  //const setResource gets assigned to the second item and is a function that sets the value of state

  //'posts' sets the initial value of the state

  const [currentCount, setCount] = useState(0);


    return (
      <div>
        <UserList></UserList>
        <div>
            <button onClick={() => setResource('posts')}>Posts</button>
            <button onClick={() => setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource}/>
      </div>
    );
}

export default App;