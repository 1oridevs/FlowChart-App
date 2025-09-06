import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { useFlowchartStore } from './store/flowchartStore';
import Toolbar from './components/Toolbar';
import Flowchart from './components/Flowchart';
import Sidebar from './components/Sidebar';

function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowchartStore();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" style={{ height: '100vh' }}>
      <Toolbar />
      <div className="flex-1 flex" style={{ height: 'calc(100vh - 80px)' }}>
        <Sidebar />
        <div className="flex-1 relative" style={{ height: '100%' }}>
          <ReactFlowProvider>
            <Flowchart
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
            />
          </ReactFlowProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
