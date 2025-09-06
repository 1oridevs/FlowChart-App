import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import type { Node, Edge, Connection, NodeChange, EdgeChange } from 'reactflow';
import type { NodeType } from '../types';

export interface FlowchartState {
  nodes: Node[];
  edges: Edge[];
  selectedNodeType: NodeType;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  setSelectedNodeType: (type: NodeType) => void;
  addNode: (node: Omit<Node, 'id'>) => void;
  clearFlowchart: () => void;
}

export const useFlowchartStore = create<FlowchartState>((set, get) => ({
  nodes: [
    {
      id: '1',
      type: 'start',
      position: { x: 100, y: 100 },
      data: { label: 'System Start' },
    },
  ],
  edges: [],
  selectedNodeType: 'api',
  
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  
  setSelectedNodeType: (type) => set({ selectedNodeType: type }),
  
  addNode: (nodeData) => {
    const id = (get().nodes.length + 1).toString();
    const newNode: Node = {
      ...nodeData,
      id,
    };
    set({
      nodes: [...get().nodes, newNode],
    });
  },
  
  clearFlowchart: () => set({ nodes: [], edges: [] }),
}));
