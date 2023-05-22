import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// User component
const User = ({ user }) => {
  return (
    <div className='user'>
      <h3>{user.firstName} {user.lastName}</h3> 
      <p>{user.description}</p>
    </div>
  );
};

// Post component
const Post = ({ post }) => {
  return (
    <div className='post'>
      <h3>{post.title}</h3>
      <h5>{post.author}</h5>
      <p>{post.body}</p>
    </div>
  );
};

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      // Fetch users from the server
      axios.get('/api/users')
        .then(response => {
          setUsers(response.data.users);
        })
        .catch(error => {
          console.log(error);
        });

      // Fetch posts from the server
      axios.get('/api/posts')
        .then(response => {
          setPosts(response.data.posts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [showContent]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Facebook-like App</h2>
        <button onClick={() => setShowContent(true)}>Show Users and Posts</button>
      </header>
      {showContent && (
        <div className='container-app'>
          <div className='container-users'>
            <h1>Users</h1>
            {Object.values(users).map((user,i) => {
              return <User key={i} user={user} />;
            })}
          </div>
          <div className='container-posts'>
            <h1>Posts</h1>
            {Object.values(posts).map((post,i) => {
            return <Post key={i} post={post} />
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
