// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IssueList from './components/IssueList'; // Atualize a importação
import IssueDetail from './components/IssueDetail'; // Atualize a importação
import Profile from './components/Profile';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<IssueList />} />
        <Route path="/issues/:number" element={<IssueDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
