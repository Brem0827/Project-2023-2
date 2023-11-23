import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import '../css/Community.css';
import ScrollHeader from '../components/ScrollHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Community() {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  const handleAddPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost, time: Date.now() }]);
  }

  const handleEditPost = (postId, updatedContent) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, content: updatedContent } : post
    ));
    setEditingPostId(null);
  }

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
    setEditingPostId(null);
  }

  const startEditing = (postId) => {
    setEditingPostId(postId);
  }

  const cancelEditing = () => {
    setEditingPostId(null);
  }

  return (
    <div>
      <Header />
      <ScrollHeader />
      <div className="Community">
        <h1 className='Community-Title'>Community</h1>
        <PostList
          posts={posts}
          onEdit={startEditing}
          onDelete={handleDeletePost}
          editingPostId={editingPostId}
          onCancelEditing={cancelEditing}
        />
        <PostForm
          onAddPost={handleAddPost}
          onEditPost={handleEditPost}
          editingPostId={editingPostId}
          onCancelEditing={cancelEditing}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Community;