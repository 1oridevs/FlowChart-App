import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { useFlowchartStore } from './store/flowchartStore';
import Toolbar from './components/Toolbar';
import Flowchart from './components/Flowchart';
import Sidebar from './components/Sidebar';

function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowchartStore();

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Toolbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 relative">
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
