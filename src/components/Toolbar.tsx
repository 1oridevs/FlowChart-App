import React from 'react';
import { 
  Play, 
  Square, 
  Diamond, 
  Plus, 
  Save, 
  Download, 
  Upload,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Grid,
  Settings,
  Sun,
  Moon
} from 'lucide-react';
import { useFlowchartStore } from '../store/flowchartStore';

const Toolbar = () => {
  const { selectedNodeType, setSelectedNodeType, addNode } = useFlowchartStore();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const nodeTypes = [
    { type: 'start', label: 'Start', icon: Play, color: 'bg-green-500 hover:bg-green-600' },
    { type: 'process', label: 'Process', icon: Square, color: 'bg-blue-500 hover:bg-blue-600' },
    { type: 'decision', label: 'Decision', icon: Diamond, color: 'bg-yellow-500 hover:bg-yellow-600' },
    { type: 'end', label: 'End', icon: Square, color: 'bg-red-500 hover:bg-red-600' },
  ];

  const handleAddNode = () => {
    const nodeData = {
      type: selectedNodeType,
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `${selectedNodeType.charAt(0).toUpperCase() + selectedNodeType.slice(1)} Node` },
    };
    addNode(nodeData);
  };

  const handleExport = () => {
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
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left side - Node tools */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Add Node:</span>
            <div className="flex gap-1">
              {nodeTypes.map(({ type, label, icon: Icon, color }) => (
                <button
                  key={type}
                  onClick={() => setSelectedNodeType(type)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedNodeType === type
                      ? `${color} text-white shadow-lg transform scale-105`
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  title={`Add ${label} Node`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
          
          <button
            onClick={handleAddNode}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            title="Add selected node to canvas"
          >
            <Plus size={16} />
            Add Node
          </button>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Undo"
            >
              <Undo size={16} />
            </button>
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Redo"
            >
              <Redo size={16} />
            </button>
          </div>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
          
          <div className="flex items-center gap-1">
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Reset View"
            >
              <RotateCcw size={16} />
            </button>
          </div>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
            title="Export flowchart"
          >
            <Download size={16} />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
