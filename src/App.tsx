import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { useFlowchartStore } from './store/flowchartStore';
import Toolbar from './components/Toolbar';
import Flowchart from './components/Flowchart';

function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowchartStore();

  return (
    <div className="h-screen flex flex-col">
      <Toolbar />
      <div className="flex-1">
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
  );
}

export default App;
