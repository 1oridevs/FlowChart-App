import React, { useState } from 'react';
import { 
  Settings, 
  Palette, 
  Download, 
  Upload, 
  Trash2, 
  Copy, 
  Undo, 
  Redo,
  Grid,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import { useFlowchartStore } from '../store/flowchartStore';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('properties');
  const { nodes, edges, clearFlowchart, selectedNodeType, setSelectedNodeType } = useFlowchartStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          // TODO: Implement load functionality
          console.log('Loaded data:', data);
        } catch (error) {
          console.error('Error loading file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleExport = () => {
    const data = { nodes, edges };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flowchart.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'properties', label: 'Properties', icon: Settings },
    { id: 'style', label: 'Style', icon: Palette },
    { id: 'actions', label: 'Actions', icon: Download },
  ];

  return (
    <div className="w-full sm:w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-r border-gray-200/50 dark:border-gray-700/50 flex flex-col shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-xl font-bold">Flowchart Mapper</h2>
        <p className="text-sm text-blue-100">Create and edit flowcharts</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-700/50">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-all duration-200 ${
              activeTab === id
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-white/50 dark:bg-gray-800/50'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30'
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === 'properties' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Node Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { type: 'start', label: 'Start', color: 'bg-green-500' },
                  { type: 'process', label: 'Process', color: 'bg-blue-500' },
                  { type: 'decision', label: 'Decision', color: 'bg-yellow-500' },
                  { type: 'end', label: 'End', color: 'bg-red-500' },
                ].map(({ type, label, color }) => (
                  <button
                    key={type}
                    onClick={() => setSelectedNodeType(type)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      selectedNodeType === type
                        ? `${color} text-white shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Statistics</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Nodes:</span>
                  <span className="font-medium">{nodes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Connections:</span>
                  <span className="font-medium">{edges.length}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'style' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Theme
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Light
                </button>
                <button className="p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700">
                  Dark
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Grid
              </label>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <Grid size={16} />
                  Show Grid
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'actions' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">File Operations</h3>
              <div className="space-y-2">
                <button
                  onClick={handleExport}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <Download size={16} />
                  Export Flowchart
                </button>
                
                <label className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <Upload size={16} />
                  Import Flowchart
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Canvas Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Undo size={16} />
                  Undo
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Redo size={16} />
                  Redo
                </button>
                <button
                  onClick={clearFlowchart}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  <Trash2 size={16} />
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
