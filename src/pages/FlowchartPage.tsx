import React from 'react';
import { useFlowchartStore } from '../store/flowchartStore';
import Toolbar from '../components/Toolbar';
import Flowchart from '../components/Flowchart';
import Sidebar from '../components/Sidebar';

const FlowchartPage = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowchartStore();

  return (
    <div className="h-screen flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>
      <Toolbar />
      <div className="flex-1 flex" style={{ height: 'calc(100vh - 144px)' }}>
        <Sidebar />
        <div className="flex-1 relative" style={{ height: '100%' }}>
          <Flowchart
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowchartPage;
