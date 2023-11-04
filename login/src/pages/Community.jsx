import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import '../css/Community.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Community() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost, time: Date.now() }]);
  }

  return (
    <div>
        <Header />
        <div className="Community">
            <h1 className='Community-Title'>Community</h1>
            <PostList posts={posts} />
            <PostForm onAddPost={handleAddPost} />
        </div>
        <Footer />
    </div>
  );
}

export default Community;