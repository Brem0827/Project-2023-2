import React from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  }

  return (
    <form className='ContactForm' onSubmit={handleSubmit}>
      <h2>문의하기</h2>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" name="name" required /> <br/>
      <label htmlFor="email">이메일</label>
      <input type="email" id="email" name="email" required /><br/>
      <label htmlFor="message">메시지</label>
      <textarea id="message" name="message" required></textarea><br/>
      <button type="submit">보내기</button>
    </form>
  );
}

export default ContactForm;