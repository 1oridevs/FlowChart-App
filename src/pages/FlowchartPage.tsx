import React, { useState } from 'react';
import { useFlowchartStore } from '../store/flowchartStore';
import Toolbar from '../components/Toolbar';
import Flowchart from '../components/Flowchart';
import Sidebar from '../components/Sidebar';
import NodePropertiesPanel from '../components/NodePropertiesPanel';
import KeyboardShortcutsModal from '../components/KeyboardShortcutsModal';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import type { Node } from 'reactflow';

const FlowchartPage = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes } = useFlowchartStore();
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [showProperties, setShowProperties] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  // Enable keyboard shortcuts
  useKeyboardShortcuts();

  const handleNodeClick = (event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setShowProperties(true);
  };

  const handleUpdateNode = (nodeId: string, updates: Partial<Node['data']>) => {
    setNodes(nodes.map(node => 
      node.id === nodeId 
        ? { ...node, data: { ...node.data, ...updates } }
        : node
    ));
  };

  const handleCloseProperties = () => {
    setShowProperties(false);
    setSelectedNode(null);
  };

  return (
    <div className="h-screen flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>
      <Toolbar onShowShortcuts={() => setShowShortcuts(true)} />
      <div className="flex-1 flex" style={{ height: 'calc(100vh - 144px)' }}>
        <Sidebar />
        <div className="flex-1 relative" style={{ height: '100%' }}>
          <Flowchart
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
          />
        </div>
        {showProperties && selectedNode && (
          <NodePropertiesPanel
            selectedNode={selectedNode}
            onUpdateNode={handleUpdateNode}
            onClose={handleCloseProperties}
          />
        )}
      </div>
      
      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />
    </div>
  );
};

export default FlowchartPage;
