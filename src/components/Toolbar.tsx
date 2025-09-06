import { Play, Square, Diamond, Trash2, Save, Download } from 'lucide-react';
import { useFlowchartStore } from '../store/flowchartStore';

const Toolbar = () => {
  const { selectedNodeType, setSelectedNodeType, addNode, clearFlowchart } = useFlowchartStore();

  const nodeTypes = [
    { type: 'start', label: 'Start', icon: Play, color: 'bg-green-500' },
    { type: 'process', label: 'Process', icon: Square, color: 'bg-blue-500' },
    { type: 'decision', label: 'Decision', icon: Diamond, color: 'bg-yellow-500' },
    { type: 'end', label: 'End', icon: Square, color: 'bg-red-500' },
  ];

  const handleAddNode = () => {
    const nodeData = {
      type: selectedNodeType,
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `${selectedNodeType.charAt(0).toUpperCase() + selectedNodeType.slice(1)} Node` },
    };
    addNode(nodeData);
  };

  const handleSave = () => {
    const { nodes, edges } = useFlowchartStore.getState();
    const data = { nodes, edges };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flowchart.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Node Types:</span>
        {nodeTypes.map(({ type, label, icon: Icon, color }) => (
          <button
            key={type}
            onClick={() => setSelectedNodeType(type)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedNodeType === type
                ? `${color} text-white`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
      
      <div className="h-6 w-px bg-gray-300" />
      
      <button
        onClick={handleAddNode}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <Square size={16} />
        Add Node
      </button>
      
      <div className="h-6 w-px bg-gray-300" />
      
      <button
        onClick={handleSave}
        className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        <Save size={16} />
        Save
      </button>
      
      <button
        onClick={clearFlowchart}
        className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        <Trash2 size={16} />
        Clear
      </button>
    </div>
  );
};

export default Toolbar;
