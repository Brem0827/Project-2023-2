import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from './Post';

const Blog = ({ posts }) => (
  <Row>
    {posts.map(post => (
      <Col key={post.id} md={4} className="mb-4">
        <Post title={post.title} content={post.body} date={post.date} />
      </Col>
    ))}
  </Row>
);

export default Blog;