import React, { useState, useEffect } from "react";
import axios from 'axios';
import PostItem from './PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;