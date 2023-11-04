import React, { useState } from 'react';

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title });
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        placeholder="내용을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="post-input"
      />
      <button type="submit" className="post-button">글 작성</button>
    </form>
  );
}

export default PostForm;