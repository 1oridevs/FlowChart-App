import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import type { Node, Edge, Connection, NodeChange, EdgeChange } from 'reactflow';
import type { NodeType } from '../types';
import 'reactflow/dist/style.css';

import StartNode from './nodes/StartNode';
import EndNode from './nodes/EndNode';
import APINode from './nodes/APINode';
import DatabaseNode from './nodes/DatabaseNode';
import FunctionNode from './nodes/FunctionNode';
import ServiceNode from './nodes/ServiceNode';
import ConditionNode from './nodes/ConditionNode';
import EventNode from './nodes/EventNode';

const nodeTypes = {
  start: StartNode,
  end: EndNode,
  api: APINode,
  database: DatabaseNode,
  function: FunctionNode,
  service: ServiceNode,
  condition: ConditionNode,
  event: EventNode,
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
    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        defaultEdgeOptions={{
          style: { strokeWidth: 3, stroke: '#4f46e5' },
          type: 'smoothstep',
        }}
        connectionLineStyle={{ strokeWidth: 3, stroke: '#3b82f6' }}
        style={{ width: '100%', height: '100%' }}
      >
        <Controls 
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl"
          showInteractive={false}
        />
               <MiniMap
                 className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl"
                 nodeColor={(node) => {
                   switch (node.type) {
                     case 'start': return '#10b981';
                     case 'end': return '#ef4444';
                     case 'api': return '#3b82f6';
                     case 'database': return '#10b981';
                     case 'function': return '#8b5cf6';
                     case 'service': return '#f97316';
                     case 'condition': return '#eab308';
                     case 'event': return '#ef4444';
                     default: return '#6b7280';
                   }
                 }}
                 maskColor="rgba(0, 0, 0, 0.1)"
               />
        <Background 
          variant="dots" 
          gap={25} 
          size={1.2} 
          color="#a5b4fc"
          className="opacity-30"
        />
      </ReactFlow>
    </div>
  );
};

export default Flowchart;
