import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeChange,
  EdgeChange,
} from 'reactflow';
import type { Node, Edge, Connection } from 'reactflow';
import 'reactflow/dist/style.css';

import StartNode from './nodes/StartNode';
import ProcessNode from './nodes/ProcessNode';
import DecisionNode from './nodes/DecisionNode';
import EndNode from './nodes/EndNode';

const nodeTypes = {
  start: StartNode,
  process: ProcessNode,
  decision: DecisionNode,
  end: EndNode,
};

interface FlowchartProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
}

const Flowchart: React.FC<FlowchartProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
}) => {
  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Flowchart;
