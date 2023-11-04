import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="post-title" style={{ color: 'violet' }}>{post.title}</div>
              <div className="post-time text-muted">{new Date(post.time).toLocaleString()}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;