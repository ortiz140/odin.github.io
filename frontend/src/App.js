import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import ProtoView from './components/Protoclusters/View.js';
import SelectionPage from './components/Protoclusters/SelectionPage.js';
import { Routes, Route, HashRouter as Router, useLocation } from 'react-router-dom';
import Footer from './components/Dashboard/Footer.jsx';
import React from 'react';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isWhiteBackgroundPage =  location.pathname === '/' || location.pathname.includes('protoclusters');
  console.log("background;", isWhiteBackgroundPage)

  // Update the body's class name dynamically based on the current route
  React.useEffect(() => {
    if (isWhiteBackgroundPage) {
      document.body.classList.add('white-background');
    } else {
      document.body.classList.remove('white-background');
    }
  }, [isWhiteBackgroundPage]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/protoclusters' element={<SelectionPage />} />
          <Route path='/protoclusters/:protoclusterName' element={<ProtoView />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
