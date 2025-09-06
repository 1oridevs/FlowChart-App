import React from 'react';
import { 
  Play, 
  Square, 
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
  Moon,
  Globe,
  Database,
  Code,
  Server,
  GitBranch,
  Zap,
  HelpCircle
} from 'lucide-react';
import { useFlowchartStore } from '../store/flowchartStore';
import type { NodeType } from '../types';

interface ToolbarProps {
  onShowShortcuts?: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onShowShortcuts }) => {
  const { selectedNodeType, setSelectedNodeType, addNode } = useFlowchartStore();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [showAddSuccess, setShowAddSuccess] = React.useState(false);

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
    { type: 'start' as NodeType, label: 'Start', icon: Play, color: 'bg-green-500 hover:bg-green-600' },
    { type: 'api' as NodeType, label: 'API', icon: Globe, color: 'bg-blue-500 hover:bg-blue-600' },
    { type: 'database' as NodeType, label: 'Database', icon: Database, color: 'bg-green-500 hover:bg-green-600' },
    { type: 'function' as NodeType, label: 'Function', icon: Code, color: 'bg-purple-500 hover:bg-purple-600' },
    { type: 'service' as NodeType, label: 'Service', icon: Server, color: 'bg-orange-500 hover:bg-orange-600' },
    { type: 'condition' as NodeType, label: 'Condition', icon: GitBranch, color: 'bg-yellow-500 hover:bg-yellow-600' },
    { type: 'event' as NodeType, label: 'Event', icon: Zap, color: 'bg-red-500 hover:bg-red-600' },
    { type: 'end' as NodeType, label: 'End', icon: Square, color: 'bg-gray-500 hover:bg-gray-600' },
  ];

  const handleAddNode = () => {
    const nodeData = {
      type: selectedNodeType,
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `${selectedNodeType.charAt(0).toUpperCase() + selectedNodeType.slice(1)} Node` },
    };
    addNode(nodeData);
    
    // Show success feedback
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 2000);
  };

  const handleExport = () => {
    const { nodes, edges } = useFlowchartStore.getState();
    const data = { 
      nodes, 
      edges,
      metadata: {
        version: '1.0',
        created: new Date().toISOString(),
        type: 'developer-flowchart'
      }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flowchart-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (data.nodes && data.edges) {
            useFlowchartStore.getState().setNodes(data.nodes);
            useFlowchartStore.getState().setEdges(data.edges);
          }
        } catch (error) {
          console.error('Error importing file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left side - Node tools */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
          {/* Node Type Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Node Type:</span>
            <div className="relative w-full sm:w-auto">
              <select
                value={selectedNodeType}
                onChange={(e) => setSelectedNodeType(e.target.value as NodeType)}
                className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 pl-10 text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-full sm:min-w-[160px] cursor-pointer"
              >
                {nodeTypes.map(({ type, label }) => (
                  <option key={type} value={type}>
                    {label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {/* Selected node type icon indicator */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {(() => {
                  const selectedNode = nodeTypes.find(node => node.type === selectedNodeType);
                  const Icon = selectedNode?.icon;
                  return Icon ? <Icon size={16} className="text-gray-500" /> : null;
                })()}
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block h-6 w-px bg-gray-300 dark:bg-gray-600" />
          
          {/* Add Node Button */}
          <button
            onClick={handleAddNode}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-sm sm:text-base whitespace-nowrap ${
              showAddSuccess 
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
            }`}
            title="Add selected node to canvas"
          >
            {showAddSuccess ? (
              <>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="hidden sm:inline">Added!</span>
                <span className="sm:hidden">✓</span>
              </>
            ) : (
              <>
                <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden sm:inline">Add Node</span>
                <span className="sm:hidden">Add</span>
              </>
            )}
          </button>
        </div>

        {/* Right side - Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {/* Edit Actions */}
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-colors"
              title="Undo"
            >
              <Undo size={16} />
            </button>
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-colors"
              title="Redo"
            >
              <Redo size={16} />
            </button>
          </div>
          
          {/* View Controls */}
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-colors"
              title="Reset View"
            >
              <RotateCcw size={16} />
            </button>
          </div>
          
          {/* Settings & Help */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button
              onClick={onShowShortcuts}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Keyboard Shortcuts"
            >
              <HelpCircle size={16} />
            </button>
          </div>
          
          {/* File Actions */}
          <div className="flex items-center gap-2">
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
              id="import-file"
            />
            <label
              htmlFor="import-file"
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer font-medium text-sm sm:text-base whitespace-nowrap"
              title="Import flowchart"
            >
              <Upload size={16} />
              <span className="hidden sm:inline">Import</span>
            </label>
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-sm sm:text-base whitespace-nowrap"
              title="Export flowchart"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
