import React from 'react';
import Header from './Header';
import './App.css';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <main className="container">
      <section className="sectionMain">
        <Header />
        <Content />
        <Footer />
      </section>
    </main>
  );
}

export default App;
