import React, { useState, useEffect } from 'react';
import { X, Save, Edit3 } from 'lucide-react';
import type { Node } from 'reactflow';

interface NodePropertiesPanelProps {
  selectedNode: Node | null;
  onUpdateNode: (nodeId: string, updates: Partial<Node['data']>) => void;
  onClose: () => void;
}

const NodePropertiesPanel: React.FC<NodePropertiesPanelProps> = ({
  selectedNode,
  onUpdateNode,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    label: '',
    description: '',
    method: '',
    type: '',
    language: '',
    status: '',
    condition: '',
    eventType: '',
  });

  useEffect(() => {
    if (selectedNode) {
      setFormData({
        label: selectedNode.data.label || '',
        description: selectedNode.data.description || '',
        method: selectedNode.data.method || '',
        type: selectedNode.data.type || '',
        language: selectedNode.data.language || '',
        status: selectedNode.data.status || '',
        condition: selectedNode.data.condition || '',
        eventType: selectedNode.data.eventType || '',
      });
    }
  }, [selectedNode]);

  const handleSave = () => {
    if (selectedNode) {
      onUpdateNode(selectedNode.id, formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!selectedNode) return null;

  const getNodeSpecificFields = () => {
    switch (selectedNode.type) {
      case 'api':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                HTTP Method
              </label>
              <select
                value={formData.method}
                onChange={(e) => handleInputChange('method', e.target.value)}
                className="input"
              >
                <option value="">Select Method</option>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>
          </div>
        );
      case 'database':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Database Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="input"
              >
                <option value="">Select Type</option>
                <option value="PostgreSQL">PostgreSQL</option>
                <option value="MySQL">MySQL</option>
                <option value="MongoDB">MongoDB</option>
                <option value="Redis">Redis</option>
                <option value="SQLite">SQLite</option>
              </select>
            </div>
          </div>
        );
      case 'function':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Programming Language
              </label>
              <select
                value={formData.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
                className="input"
              >
                <option value="">Select Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
                <option value="Go">Go</option>
                <option value="Rust">Rust</option>
              </select>
            </div>
          </div>
        );
      case 'service':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Service Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="input"
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Deprecated">Deprecated</option>
              </select>
            </div>
          </div>
        );
      case 'condition':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Condition Expression
              </label>
              <input
                type="text"
                value={formData.condition}
                onChange={(e) => handleInputChange('condition', e.target.value)}
                placeholder="e.g., user.isAuthenticated"
                className="input"
              />
            </div>
          </div>
        );
      case 'event':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Event Type
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => handleInputChange('eventType', e.target.value)}
                className="input"
              >
                <option value="">Select Event Type</option>
                <option value="User Action">User Action</option>
                <option value="System Event">System Event</option>
                <option value="Webhook">Webhook</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Error">Error</option>
              </select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full sm:w-80 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-l border-gray-200/50 dark:border-gray-700/50 flex flex-col shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Node Properties</h2>
            <p className="text-sm text-blue-100 capitalize">{selectedNode.type} Node</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Basic Properties */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Properties</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Label
            </label>
            <input
              type="text"
              value={formData.label}
              onChange={(e) => handleInputChange('label', e.target.value)}
              className="input"
              placeholder="Enter node label"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="input resize-none"
              rows={3}
              placeholder="Enter node description"
            />
          </div>
        </div>

        {/* Node-Specific Properties */}
        {getNodeSpecificFields()}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50">
        <button
          onClick={handleSave}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NodePropertiesPanel;
