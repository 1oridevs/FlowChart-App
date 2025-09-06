import { create } from 'zustand';
import { Node, Edge, addEdge, applyNodeChanges, applyEdgeChanges, NodeChange, EdgeChange, Connection } from 'reactflow';

export interface FlowchartState {
  nodes: Node[];
  edges: Edge[];
  selectedNodeType: string;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  setSelectedNodeType: (type: string) => void;
  addNode: (node: Omit<Node, 'id'>) => void;
  clearFlowchart: () => void;
}

export const useFlowchartStore = create<FlowchartState>((set, get) => ({
  nodes: [
    {
      id: '1',
      type: 'start',
      position: { x: 100, y: 100 },
      data: { label: 'Start' },
    },
  ],
  edges: [],
  selectedNodeType: 'process',
  
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
