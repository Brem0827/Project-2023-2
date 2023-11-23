import React from 'react';

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="post-list">
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="post-content">
                <h3 className="post-title" style={{ color: 'violet', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{post.title}</h3>
                <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{post.content}</p>
              </div>
              <div className="post-info">
                <small className="text-muted" style={{ fontSize: '0.8rem' }}>{new Date(post.time).toLocaleString()}</small>
                <div className="post-actions">
                  {/* 삭제 버튼 */}
                  <button className="btn btn-sm btn-outline-danger mr-2" onClick={() => onDelete(post.id)}>
                    삭제
                  </button>
                  {/* 수정 버튼 */}
                  <button className="btn btn-sm btn-outline-info" onClick={() => onEdit(post.id)}>
                    수정
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;