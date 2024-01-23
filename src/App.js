import React, { useState } from 'react';
import PostList from './PostList';
import AddPost from './AddPost';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <AddPost onAdd={handleAddPost} />
      <PostList />
    </div>
  );
};

export default App;
