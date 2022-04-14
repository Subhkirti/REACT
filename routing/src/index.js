import React from 'react';
import ReactDOM from 'react-dom';
import Header from './head';
import Footer from './footer';
import Page from './Page'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to="/head">Heading</Link>
      <Link to="/footer"> Footer</Link>
      <Routes>
      <Route path="/head" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="*" element={<Page />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

