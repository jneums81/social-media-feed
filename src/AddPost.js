import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddPost = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleAddPost = () => {
        const newPost = {
            id: uuid(),
            title,
            body,
        };

        onAdd(newPost);
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h3>Add a New Post</h3>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <button onClick={handleAddPost}>Add Post</button>
        </div>
    );
};

export default AddPost;