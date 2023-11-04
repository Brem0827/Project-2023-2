import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';
import HelpCenter from '../components/HelpCenter';
import Home from '../components/Home';
import ShortcutButtons from '../components/ShortcutButtons'; // 바로가기 버튼 추가
import '../css/Support.css';

function Support() {
  return (
    <div className="Support">
      <Header />
      <main>
        <Home />
        <ContactForm />
        <Faq />
        <HelpCenter />
      </main>
      <ShortcutButtons /> {/* 바로가기 버튼 추가 */}
      <Footer />
    </div>
  );
}

export default Support;