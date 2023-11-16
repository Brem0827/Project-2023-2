import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = ({ title, content, date }) => (
  <Card className="mb-4">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default Post;