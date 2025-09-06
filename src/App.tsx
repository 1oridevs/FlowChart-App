import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Settings from './pages/Settings';
import FlowchartPage from './pages/FlowchartPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/settings" element={<Settings />} />
          <Route 
            path="/flowchart" 
            element={
              <ReactFlowProvider>
                <FlowchartPage />
              </ReactFlowProvider>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
