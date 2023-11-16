import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Blog from '../components/Blog';
import '../css/MainPage.css'; // 스타일링을 위한 CSS 파일을 추가

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleAddPost = () => {
    setPosts((prevPosts) => [...prevPosts, { id: prevPosts.length + 1, ...newPost }]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <Container className="mt-5">
      <h1 className="display-4">대림 메인 화면</h1>
      <p className="lead">간단한 레이아웃을 가진 블로그입니다.</p>

      {/* 광고 섹션 */}
      <div className="ad-section">
        <div className="ad-content">
          <h2 className="ad-title">✨ 대림 프리미엄</h2>
          <p className="ad-description">
            탁월한 블로깅 경험을 위한 프리미엄 서비스를 지금 체험하세요. 한 달 동안 무료로 이용 가능!
          </p>
          <button className="ad-button">무료 체험하기</button>
        </div>
      </div>

      {/* 게시글 추가 폼 */}
      <div className="post-form">
        <h2 className="form-title">새로운 게시글 추가</h2>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">
            내용
          </label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            className="form-textarea"
          ></textarea>
        </div>

        <button className="form-button" onClick={handleAddPost}>
          게시글 추가
        </button>
      </div>

      {/* 블로그 컴포넌트에 사용자가 추가한 게시글을 전달 */}
      <Blog posts={posts} />
    </Container>
  );
};

export default MainPage;